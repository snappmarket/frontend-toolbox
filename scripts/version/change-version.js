const path = require('path');
const fse = require('fs-extra');
const grabVersionAndGenerateNewOne = require('./version-generator');

const packagePath = process.cwd();

const changeVersionInPackageJson = async (passedVersion) => {
  const { version, packageParsedData } = await grabVersionAndGenerateNewOne(passedVersion, packagePath);
  const newPackageData = {
    ...packageParsedData,
    version,
  };

  const targetPath = path.resolve(packagePath, './package.json');

  await fse.writeFile(
    targetPath,
    JSON.stringify(newPackageData, null, 2),
    'utf8',
  );
};

module.exports = changeVersionInPackageJson;
