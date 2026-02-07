import fs from "fs";
fs.unlink("test.txt", (err) => {
    if (err) throw err;