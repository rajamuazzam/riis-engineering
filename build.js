const fs = require("fs");
const path = require("path");
const root = __dirname;
const out = path.join(root, "out");
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const name of ["index.html", "styles.css", "script.js", "_headers", "robots.txt", "sitemap.xml"]) {
  fs.copyFileSync(path.join(root, name), path.join(out, name));
}
fs.cpSync(path.join(root, "public"), path.join(out, "public"), { recursive: true });
console.log("Pixel-locked static site exported to out/");
