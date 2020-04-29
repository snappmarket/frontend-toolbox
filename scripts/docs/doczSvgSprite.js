const fs = require('fs');
const glob = require('glob');

async function run() {
  const args = process.argv.slice(2);
  const path = args[0];
  const dist = args[1];
  glob(path, async (err, files) => {
    const svgs = [];
    files.forEach(file => {
      const content = fs.readFileSync(file, 'utf-8');
      const attributes = content.match(/(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g);
      const viewBox = attributes.find(attribute =>attribute.startsWith('viewBox=') );
      const id = attributes.find(attribute =>attribute.startsWith('id=') );
      let symbol = content;
      symbol = symbol.replace(/^<svg(.+?)>/gm, `<symbol ${id} ${viewBox}>`);
      symbol = symbol.replace('</svg>', `</symbol>`);
      symbol = symbol.replace(/<title.*<\/title>/, '');
      svgs.push(symbol);
    });
    const sprite = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">${svgs.join('')}<defs></defs></svg>`
    await fs.writeFileSync(dist, sprite)
  });
}

run();
