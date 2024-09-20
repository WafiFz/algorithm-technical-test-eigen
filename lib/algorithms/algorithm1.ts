export function reverseAlphabets(input: string): string {
  let alphabet = "";
  let nonAlphabet = "";
  let result = "";

  for (let i = 0; i < input.length; i++) {
    if (
      (input[i] >= "A" && input[i] <= "Z") ||
      (input[i] >= "a" && input[i] <= "z")
    ) {
      alphabet += input[i];
    } else {
      nonAlphabet += input[i];
    }
  }

  for (let i = alphabet.length - 1; i >= 0; i--) {
    result += alphabet[i];
  }

  result += nonAlphabet;

  return result;
}
