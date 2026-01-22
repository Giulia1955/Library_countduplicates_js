export function countWords(texts) {
  const paragraphs = texts.toLowerCase().split('\n');

  return paragraphs.map(paragraph => {
    const words = paragraph.split(' ');
    const count = {};

    words.forEach(word => {
      const clean = word.replace(/[^\p{L}\p{N}]/gu, '');
      if (clean.length >= 3) {
        count[clean] = (count[clean] || 0) + 1;
      }
    });

    return count;
  });
}


function splitParagraph(texts) {
  return texts.toLowerCase().split('\n');
}

function filters(word) {
  return word.replace(/[^\p{L}\p{N}]/gu, '');
}

function duplicatedWords(texts) {
  const arrayWords = texts.split(' ');
  const results = {};

  arrayWords.forEach(word => {
    const filteredWord = filters(word);

    if (filteredWord.length >= 3) {
      results[filteredWord] = (results[filteredWord] || 0) + 1;
    }
  });

  return results;
}
