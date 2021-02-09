const fs = require("fs");
// fs.writeFileSync("notes.txt", "File created by Nodejs");

fs.appendFileSync("notes.txt", "This text is appended!");
