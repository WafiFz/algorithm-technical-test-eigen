export function reverseAlphabets(input: string): string {
  const match = input.match(/^([A-Za-z]+)(\d+)$/);
  if (!match) return input;

  const [, letters, numbers] = match;
  return letters.split("").reverse().join("") + numbers;
}
