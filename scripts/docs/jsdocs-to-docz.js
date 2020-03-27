const fs = require('fs');
const glob = require('glob');
const {exec} = require('child_process');

async function run(){
  const args = process.argv.slice(2);
  const path = args[0];
  glob(path, (err, files) => {
    files.forEach(file => {
      const fileParentDir = file.substr(0, file.lastIndexOf('/'));
      const fileName = file.substr(file.lastIndexOf('/')+1);
      const markdownFileName = fileName.replace(/\.(.*)/,'.mdx');
      // const reachMarkdownFileName = fileName.replace(/\.(.*)/,'.mdx');
      try {
        exec(`jsdoc2md ${file}`, (_, stdout)=>{
          try{
            console.log(`writing docs for ${file}`);
            fs.writeFile(`${fileParentDir}/${markdownFileName}`, stdout, (error) => {
              if(error){
                console.log(`error on writing docs of: ${file} ==>`, error);
              }
              else {
                console.log(`successfully created docs for ${file}`)
              }
            });
            // console.log(`writing docz for ${file}`);
            // fs.writeFile(`${fileParentDir}/${reachMarkdownFileName}`, stdout, (error) => {
            //   if(error){
            //     console.log(`error on writing docs of: ${file} ==>`, error);
            //   }
            //   else {
            //     console.log(`successfully created docs for ${file}`)
            //   }
            // });
          }
          catch(e){
            console.log('an error occurred in writing file ==>', e)
          }
        })
      }
      catch (e) {
        console.log('an error occurred running markdown command ==>', e)
      }
    });
  });
}

run();
