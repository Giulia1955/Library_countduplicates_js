function Ocorrencies(paragraph) {
  return Object.keys(paragraph).filter(
    key => paragraph[key] > 1
  );
}

function outputFile(wordList) {
  let filteredText = '';

  wordList.forEach((paragraph, indexNumber) => {
    const duplicates = Ocorrencies(paragraph);

    if (duplicates.length === 0) return;

    filteredText += `Duplicated words in paragraph ${indexNumber + 1}:\n`;
    filteredText += `${duplicates.join(', ')}\n\n`;
  });

  return filteredText;
}

export { outputFile };
