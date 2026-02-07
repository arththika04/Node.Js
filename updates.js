const fs =require("fs/Promises");

async function updatefile() {
    let data = await fs.readfile("text.txt","utf8");
}
