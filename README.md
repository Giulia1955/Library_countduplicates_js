# Library – Count Duplicate Words per Paragraph

This project is a Node.js library and CLI tool designed to analyze text files and detect repeated words in each paragraph.
Its main goal is to help identify redundancies in textual content, making it useful for learning materials, documentation, essays, and general text analysis.

The tool processes a text file paragraph by paragraph and reports which words appear more than once in each paragraph.

---

## Features

- Counts word occurrences per paragraph
- Detects duplicated words only (ignores words that appear once)
- Ignores punctuation and special characters
- Case-insensitive analysis
- Outputs results to a text file
- Simple and extensible CLI built with commander

---

## Project Structure

.
├── src/
│   ├── cli.js                # Command-line interface
│   ├── index.js              # Core word counting logic
│   ├── helpers.js            # Output formatting helpers
│   └── ErrorClass/
│       └── errorFunctions.js # Error handling
├── archives/                 # Sample text files
├── results/                  # Output directory
├── package.json
└── README.md

---

## Requirements

- Node.js v18 or higher recommended
- npm (included with Node.js)

---

## Installation

Clone the repository:

git clone https://github.com/Giulia1955/Library_countduplicates_js.git  
cd Library_countduplicates_js

Install dependencies:

npm install

---

## Usage (Command Line)

Run the CLI using Node.js:

node src/cli.js -t archives/texto-web.txt -o ./results

---

## Command Line Options

- -t, --text <path>  
  Path to the text file to be analyzed

- -o, --output <path>  
  Directory where the results file will be saved

---

## Example

node src/cli.js -t archives/texto-web.txt -o ./results

This command will:
1. Read the file located at archives/texto-web.txt
2. Analyze each paragraph independently
3. Identify duplicated words per paragraph
4. Generate the output file:

./results/results.txt

---

## Output Format

The output file contains a human-readable report, for example:

Duplicated words in paragraph 1:
data, process, system

Duplicated words in paragraph 2:
algorithm, structure

Each section corresponds to a paragraph in the original text.

---

## Purpose of the Library

This project was created to:
- Practice JavaScript modularization
- Learn how to build Node.js CLI tools
- Improve text analysis for redundancy detection
- Serve as a reusable library for future text-processing projects

---

## Possible Improvements

- Export results as JSON or CSV
- Add configuration for minimum word length
- Ignore stop words (such as "the", "and", "of")
- Publish the library as an npm package
- Add automated tests

---

## License

This project is licensed under the ISC License.

---

## Author

Developed by Giulia Mezaroba  
Computer Science student and JavaScript enthusiast.
