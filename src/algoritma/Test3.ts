export function Test3(input: string[], query: string[]): number[] {
    const output: number[] = [];

    for (const wordToCount of query) {
        let count = 0;

        for (const word of input) {
            if (word === wordToCount) {
                count++;
            }
        }

        output.push(count);
    }

    return output;
}

