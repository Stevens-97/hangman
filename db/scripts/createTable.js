import query from '../index.js'

async function createTable(array) {
    let mySQLString = `CREATE TABLE words (
        word_id SERIAL PRIMARY KEY,
        theme TEXT,
        word TEXT,
        wordLength INT
    );`
    const response = await query(mySQLString)
    console.log(response.rows)
    return response.rows
}

createTable()
