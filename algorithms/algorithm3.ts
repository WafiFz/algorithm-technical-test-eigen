export function countQueryMatched(input: string[], query: string[]): number[] {
  const result: number[] = [];

  query.forEach((queryWord) => {
    let count = 0;
    input.forEach((inputWord) => {
      if (inputWord === queryWord) {
        count++;
      }
    });
    result.push(count);
  });

  return result;
}
