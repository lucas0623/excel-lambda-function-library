import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const vault = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")

const dest = path.resolve(process.argv[2] ?? "")
if (!process.argv[2]) {
  console.error("usage: node docs-site/prepare-content.mjs <content-directory>")
  process.exit(1)
}
function rm(dir) {
  fs.rmSync(dir, { recursive: true, force: true })
}

function copyFile(from, to) {
  fs.mkdirSync(path.dirname(to), { recursive: true })
  fs.copyFileSync(from, to)
}

function walk(dir) {
  if (!fs.existsSync(dir)) return []
  const out = []
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) out.push(...walk(p))
    else out.push(p)
  }
  return out
}

// Alias slugs match the note name, which makes Quartz treat the link as ambiguous.
function stripAliases(markdown) {
  return markdown.replace(/^---\r?\n([\s\S]*?)\r?\n---/, (full, frontmatter) => {
    const next = frontmatter.replace(/^aliases:\r?\n(?:[ \t]+- .*(?:\r?\n|$))*/m, "")
    return `---\n${next.replace(/\s+$/, "")}\n---`
  })
}

rm(dest)
const docDest = path.join(dest, "Documentation")
for (const file of walk(path.join(vault, "Documentation"))) {
  if (!file.endsWith(".md")) continue
  const rel = path.relative(path.join(vault, "Documentation"), file)
  const target = path.join(docDest, rel)
  const text = stripAliases(fs.readFileSync(file, "utf8"))
  fs.mkdirSync(path.dirname(target), { recursive: true })
  fs.writeFileSync(target, text)
}

const examples = path.join(vault, "Examples")
for (const file of walk(examples)) {
  const base = path.basename(file)
  if (!base.toLowerCase().endsWith(".xlsx") || base.startsWith("~$")) continue
  copyFile(file, path.join(dest, "Examples", base))
}

const attachments = path.join(vault, "Z_System", "Attachment")
for (const file of walk(attachments)) {
  const base = path.basename(file)
  if (base.startsWith("~$")) continue
  if (!/\.(jpe?g|png|gif|webp)$/i.test(base)) continue
  copyFile(file, path.join(dest, "Z_System", "Attachment", base))
}

const readme = fs.readFileSync(path.join(vault, "README.md"), "utf8").replace(/^\uFEFF/, "")
const homepage = readme.startsWith("---")
  ? readme
  : `---
title: Lambda Function Library
---

${readme}`
fs.writeFileSync(path.join(dest, "index.md"), homepage)
