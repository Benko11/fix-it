const fs = require("fs");

const lines = fs.readFileSync("blocked.txt", { encoding: "utf-8" }).split("\n");
const newLines = [];
lines.forEach((line) => {
  let item = "";
  item += `0.0.0.0 ${line}\n`;
  item += `0.0.0.0 www.${line}\n`;
  item += `::1 ${line}\n`;
  item += `::1 www.${line}\n`;

  newLines.push(item);
});

fs.writeFileSync("blocked-output.txt", newLines.join(""));
