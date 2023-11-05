#!/usr/bin/env node
require("colors");
const readLineSync = require("readline-sync");
const path = require("path");
const fse = require("fs-extra");

const NO_CHOICE_MADE = -1;
const CURR_DIR = process.cwd();
const templatesDir = path.join(__dirname, "templates");
const templates = fse.readdirSync(templatesDir);
let selectedTemplate = '';
let index;

if (!templates.length) {
  console.log("no template to choose from , templates folder is empty");
  process.exit(0);
}

process.argv.forEach(function (val, index) {
  if(val.includes('index.js')) {
    const nextVal = process.argv[index + 1];
    selectedTemplate = templates.find(t => t === nextVal);
  }
});

if(!selectedTemplate) {
  index = readLineSync.keyInSelect(templates);

  if (index === NO_CHOICE_MADE) {
    process.exit(0);
  }
}

const projectName = readLineSync.question(
  "What is the name of your project? ",
  {
    limit: (input) => input.trim().length > 0,
    limitMessage: "The project has to have a name, try again",
  }
);

const confirmCreateDirectory = readLineSync.keyInYN(
  `You entered '${projectName}', create directory with this name?`
);

if (confirmCreateDirectory) {
  const template = selectedTemplate || templates[index];
  const source = path.join(templatesDir, template);
  const destination = path.join(CURR_DIR, projectName);
  fse
    .copy(source, destination)
    .then(() => console.log(`Successfully created ${destination}`.green))
    .catch((err) => console.error(err));
} else {
  console.log("Aborted creating a new template");
}
