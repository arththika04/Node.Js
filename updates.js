const fs =require("fs/Promises");

async function updatefile() {
    let data = await fs.readfile("text.txt","utf8");
    data = data.replace("Hello", "Hi");
    await fs.writeFile("test.txt", data);
}
updateFile();
