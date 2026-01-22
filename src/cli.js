import fs from 'fs';
import path from 'path';
import errorTreatment from './ErrorClass/errorFunctions.js';
import { countWords } from './index.js';
import { outputFile } from './helpers.js';
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
  .version('0.0.1')
  .option('-t, --text <string>', 'file to be processed')
  .option('-o, --output <string>', 'output directory')
  .action(({ text, output }) => {
    if (!text || !output) {
      console.log(chalk.red('error: you should insert the path of text and output'));
      program.help();
      return;
    }

    fileProcess(text, output);
  });

program.parse(process.argv);


function fileProcess(textPath, outputPath) {
  const resolvedText = path.resolve(textPath);
  const resolvedOutput = path.resolve(outputPath);

  fs.readFile(resolvedText, 'utf-8', async (error, fileText) => {
    try {
      if (error) throw error;

      const results = countWords(fileText);
      await createFile(results, resolvedOutput);

      console.log(chalk.green('Text processed successfully ✔️'));
    } catch (error) {
      errorTreatment(error);
    }
  });
}

async function createFile(wordList, outputDir) {
  const saveFile = path.join(outputDir, 'results.txt');
  const wordText = outputFile(wordList);

  try {
    await fs.promises.writeFile(saveFile, wordText);
    console.log(chalk.green('File created successfully ✔️'));
  } catch (error) {
    throw error;
  }
}
