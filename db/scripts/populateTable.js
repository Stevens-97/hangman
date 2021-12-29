import query from '../index.js'
import {
    generalWords,
    codingWords,
    gamingWords,
    movieWords,
    natureWords,
    scienceWords,
    sportsWords,
} from '../../data/data.js'

async function populateTable(array) {
    let allAdditions = []
    for (let i = 0; i < array.length; i++) {
        const response = await query(
            `INSERT INTO words (theme, word, wordLength)
        VALUES (
            $1,
            $2, 
            $3
        ) RETURNING * ;`,
            [array[i].theme, array[i].word, array[i].wordLength]
        )
        console.log(response.rows)
        allAdditions.push(response.rows)
    }
    return allAdditions
}
// populateTable(codingWords)
// populateTable(gamingWords)
// populateTable(movieWords)
// populateTable(natureWords)
// populateTable(scienceWords)
// populateTable(sportsWords)
