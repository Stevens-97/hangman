import pg from 'pg'
import { password, user, DBPort, theDB, host } from '../config.js'

const pool = new pg.Pool({
    user: user,
    host: host,
    database: theDB,
    password: password,
    port: DBPort,
    ssl: { rejectUnauthorized: false },
})

export default function query(text, params) {
    return pool.query(text, params)
}
