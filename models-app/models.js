// Get all words
import query from '../db/index.js';

export async function getAllWords() {
    const response = await query(`SELECT * FROM words;`);
    return response.rows;
}

// Get word by ID

export async function getWordById(id) {
    const response = await query(`SELECT * FROM words WHERE word_id = $1;`, [
        id,
    ]);
    return response.rows;
}

// Get word by theme

export async function getWordByTheme(theme) {
    const response = await query(`SELECT * FROM words WHERE theme = $1;`, [
        theme,
    ]);
    return response.rows;
}

// Delete word by ID

export async function deleteWordById(id) {
    const response = await query(
        `DELETE FROM words WHERE word_id = $1 RETURNING *;`,
        [id]
    );
    return response.rows;
}

// Update word by ID
export async function updateWordById(id, body) {
    const response = await query(
        `UPDATE words SET theme = $1, word = $2 WHERE word_id = $3 RETURNING *;`,
        [body.theme, body.word, id]
    );
    return response.rows;
}

// Add word

export async function addWord(body) {
    const response = await query(
        `INSERT INTO words (theme, word)
    VALUES (
        $1, 
        $2
    ) RETURNING *;`,
        [body.theme, body.word]
    );
    return response.rows;
}
