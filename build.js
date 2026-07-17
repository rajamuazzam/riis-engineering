const fs=require("fs"),path=require("path");
const out=path.join(__dirname,"out");
fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(out,{recursive:true});
for(const n of ["index.html","styles.css","script.js","_headers","robots.txt","sitemap.xml"]){
  fs.copyFileSync(path.join(__dirname,n),path.join(out,n));
}
fs.cpSync(path.join(__dirname,"public"),path.join(out,"public"),{recursive:true});
console.log("Native RIIS concept exported to out/");
