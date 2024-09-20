import { reverseAlphabets } from "../lib/algorithms/algorithm1";

export function AlgorithmSection() {
  const input = "NEGIE1";
  const result = reverseAlphabets(input);

  return (
    <div>
      <h2>Algorithm 1: Reverse Alphabets</h2>
      <p>Input: {input}</p>
      <p>Output: {result}</p>
    </div>
  );
}
