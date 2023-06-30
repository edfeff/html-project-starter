const fs = require("fs");
const path = require("path");
const dirs = fs.readdirSync(__dirname);
dirs.sort(
  (a, b) =>
    fs.statSync(path.join(__dirname, a)).birthtime.getTime() -
    fs.statSync(path.join(__dirname, b)).birthtime.getTime()
);
//读取需要配置到html的目录
const projectNames = [];
dirs.forEach((name) => {
  if (name.charAt(0) >= "A" && name.charAt(0) <= "Z") {
    const filePath = path.join(__dirname, name);
    if (fs.lstatSync(filePath).isDirectory()) {
      projectNames.push(name);
    }
  }
});
//处理目录
const context = {};

const navList = projectNames.map((p) => {
  return `<li><a href="#${p.replace(" ", "-")}">${p}</a></li>`;
});
context.NAV_LIST = navList.join("\n");

const contentList = projectNames.map((p) => {
  return `<iframe id="${p.replace(" ", "-")}" src="${p}/index.html"></iframe>`;
});
context.CONTENT = contentList.join("\n");

let indexTemplate = fs.readFileSync("index-template.html", {
  encoding: "utf-8",
});

Object.entries(context).forEach(([k, v]) => {
  const key = `{{${k}}}`;
  indexTemplate = indexTemplate.replace(key, v);
});
fs.writeFileSync("index.html", indexTemplate);
