const fse = require('fs-extra');
const path = require('path');
const colors = require('colors');
const componentTemplate = require('./component-template');
const testTemplate = require('./test-template');

function abort(message) {
  console.log(
    '\n\n',
    message.yellow,
    '\n\nAborting generate command\nSee above for details'.red
  );
  process.exit(0);
}

const directoryName = process.argv[2].strip;
if (!directoryName) {
  abort('Component name must be specified!!');
}
const componentsDirectory = path.join(__dirname, '..', '..', 'src', 'components')
const componentName = `${directoryName[0].toUpperCase()}${directoryName.slice(1)}`;
const compFolder = path.join(componentsDirectory, directoryName);

async function verifyNameIsAvailable() {
  if (await fse.exists(compFolder)) {
    abort(`${directoryName} directory already exists!!!!`);
  }
}

function fileName(ext) {
  return path.join(compFolder, `${componentName}.${ext}`);
}

async function generateDirectory() {
  await verifyNameIsAvailable();
  
  const cFilePath = fileName('ts');
  const cStylePath = fileName('css');
  const cTestPath = fileName('test.js');

  try {
    await fse.outputFile(cFilePath, componentTemplate(componentName));
    await fse.outputFile(cTestPath, testTemplate(componentName));
    await fse.createFile(cStylePath);
  } catch(e) {
    console.log('Whoops!\nThere was an error generating the templates'.yellow, e);
  }
}

generateDirectory();
