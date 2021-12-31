export default function createArray(array, theme) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let newObject = {
            id: i + 1,
            word: array[i],
            theme: theme,
        };
        newArray.push(newObject);
    }
    return newArray;
}
