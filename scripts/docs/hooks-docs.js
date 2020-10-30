const fs = require('fs');
const glob = require('glob');
const { exec } = require('child_process');

/* eslint-disable no-console */

const args = process.argv.slice(2);
const path = args[0] || './packages/hooks/packages/*/*.js';
glob(path, (err, files) => {
  files.forEach(file => {
    const fileParentDir = file.substr(0, file.lastIndexOf('/'));
    const fileName = file.substr(file.lastIndexOf('/')+1);
    const mdxFileName = fileName.replace(/\.(.*)/,'.mdx');
    const markdownFile = `${fileParentDir}/index.mdx`;
    try {
      let markdownContent = (fs.existsSync(markdownFile) ? fs.readFileSync(markdownFile, 'utf-8') : '').split('<!-- doc -->')[0];
      exec(`jsdoc2md ${file}`, (_, stdout)=>{
        let output = stdout.replace(/<(|\/)code>/g, '');
        output = output.replace(/##+(.*)/g, value => value.split('(')[0]);

        markdownContent += `<!-- doc -->\n${output}`;

        console.log(`writing docz for ${file}`);
        fs.writeFile(`${fileParentDir}/${mdxFileName}`, markdownContent, (error) => {
          if(error){
            throw error;
          }
          console.log(`successfully created docs for ${file}`)
        });
      })
    } catch (e) {
      console.log('an error occurred ==>', e)
    }
  });
});
