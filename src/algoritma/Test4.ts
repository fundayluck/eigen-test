export function Test4(matrix: number[][]): number {
    let diagonal1Sum: number = 0;
    let diagonal2Sum: number = 0;
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        diagonal1Sum += matrix[i][i];
        diagonal2Sum += matrix[i][n - 1 - i];
    }

    return Math.abs(diagonal1Sum - diagonal2Sum);
}