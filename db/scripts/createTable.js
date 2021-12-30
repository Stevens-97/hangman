import query from '../index.js'

async function createTable() {
    let mySQLString = `CREATE TABLE words (
        word_id SERIAL PRIMARY KEY,
        theme TEXT,
        word TEXT
    );`
    const response = await query(mySQLString)
    console.log(response.rows)
    return response.rows
}

createTable()
