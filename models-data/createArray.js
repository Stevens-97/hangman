export default function createArray(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        let newObject = {
            id: i + 1,
            word: array[i],
            wordLength: array[i].length,
            letters: array[i].toLowerCase().split(''),
        }
        newArray.push(newObject)
    }
    return newArray
}
