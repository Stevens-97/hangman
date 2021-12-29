import createArray from './createArray.js'

describe(`CreateArray`, () => {
    it(`Should return an array of objects containing an id, the word, length and characters`, () => {
        //Arranagement
        let arrayOne = ['petite', 'glance', 'shirt', 'plod', 'light']
        let expected = {
            id: expect.any(Number),
            theme: expect.any(String),
            word: expect.any(String),
            wordLength: expect.any(Number),
        }
        // Act
        let actual = createArray(arrayOne, 'general')
        // Assert
        actual.forEach(function (entry) {
            expect(entry).toStrictEqual(expected)
        })
    })
})
