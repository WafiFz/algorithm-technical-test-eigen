export function findLongestWord(sentence: string): string {
  let words = [];
  let currentWord = "";

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      currentWord += sentence[i];
    } else if (currentWord !== "") {
      words.push(currentWord);
      currentWord = "";
    }
  }
  if (currentWord !== "") {
    words.push(currentWord);
  }

  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return `${longestWord}: ${longestWord.length} character${
    longestWord.length > 1 ? "s" : ""
  }`;
}
