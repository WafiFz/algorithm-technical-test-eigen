export function diagonalDifference(matrix: number[][]): number | string {
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;
  const n = matrix.length;

  // Check if the matrix is n x n
  for (let i = 0; i < n; i++) {
    if (matrix[i].length !== n) {
      return "Input must be a n x n matrix";
    }
  }

  for (let i = 0; i < n; i++) {
    primaryDiagonal += matrix[i][i];
    secondaryDiagonal += matrix[i][n - 1 - i];
  }

  let difference = primaryDiagonal - secondaryDiagonal;
  if (difference < 0) {
    difference = -difference;
  }

  return difference;
}
