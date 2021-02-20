const fs = require('fs');

//accept folder name from command line or set default folder
const folderName = process.argv[2] || 'MyFileSystem'
const configPath = `${folderName}/`

try{
//creating my folder
fs.mkdirSync(folderName);

//creating files for web dev inside my folder
fs.writeFileSync(`${configPath}index.html`,'')
fs.writeFileSync(`${configPath}app.js`,'')
fs.writeFileSync(`${configPath}styles.css`,'')
}
catch(e)
{
    console.log("Error: ",e)
}

