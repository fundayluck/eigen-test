export function Test1(input: String): String {
    let chars = []
    let num = []

    for (let i = 0; i < input.length; i++) {
        if (isNaN(parseInt(input[i]))) {
            chars.push(input[i])
        } else {
            num.push(input[i])
        }
    }

    let reversedChars = chars.reverse()

    const output = reversedChars.join('') + num.join('')

    return output
}