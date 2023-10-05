export function Test2(input: String): String {

    if (typeof input !== 'string' || input.trim() === '') {
        return 'no word'
    } else {

        const words: string[] = input.split(' ')

        let longestWord: string = ''
        let longestLength: number = 0

        for (let i = 0; i < words.length; i++) {
            const word: string = words[i];
            if (typeof word === 'string' && word.trim() !== '') {
                const cleanWord: string = word.replace(/[^a-zA-Z0-9]/g, '');

                if (cleanWord.length > longestLength) {
                    longestWord = cleanWord;
                    longestLength = cleanWord.length;
                }
            }
        }

        return longestWord
    }
}