import express from 'express';
import path from 'path';

import __dirname from './dirname.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import logger from 'morgan';

import usersRouter from './routes/users.js';

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', usersRouter);
app.use('/static', express.static('./static/'));
app.use(function (req, res, next) {
    res.status(404).json({
        message: "We couldn't find what you were looking for 😞",
    });
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json(err);
});

// Template
// app.get("/words", async(req, res)=>{
//   res.json({
//     success: true,
//     payload:
//   })
// })

// import {
//     addWord,
//     deleteWordById,
//     getAllWords,
//     getWordById,
//     getWordByTheme,
//     updateWordById,
// } from './models-app/models.js'

// // Get all words
// app.get('/words', async (req, res) => {
//     res.json({
//         success: true,
//         payload: await getAllWords(),
//     })
// })

// // Get word by ID
// app.get('/words/id/:id', async (req, res) => {
//     const id = Number(req.params.id)
//     res.json({
//         success: true,
//         payload: await getWordById(id),
//     })
// })

// // Get word by theme

// app.get('/words/theme/:theme', async (req, res) => {
//     res.json({
//         success: true,
//         payload: await getWordByTheme(req.params.theme),
//     })
// })

// // Delete word by ID

// app.delete('/words/id/:id', async (req, res) => {
//     const id = Number(req.params.id)
//     res.json({
//         success: true,
//         payload: await deleteWordById(id),
//     })
// })

// // Update word by ID

// app.put('/words/id/:id', async (req, res) => {
//     const id = Number(req.params.id)
//     res.json({
//         success: true,
//         payload: await updateWordById(id),
//     })
// })

// // Add word

// app.post('/words', async (req, res) => {
//     res.json({
//         success: true,
//         payload: await addWord(req.body),
//     })
// })

export default app;
