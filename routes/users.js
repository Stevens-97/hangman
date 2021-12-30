// import express from 'express'
import { Router } from 'express';

// const router = express.Router()

const router = Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json({ message: 'I wish we had some information to give you ☹️' });
});

import {
    addWord,
    deleteWordById,
    getAllWords,
    getWordById,
    getWordByTheme,
    updateWordById,
} from '../models-app/models.js';

// Get all words
router.get('/words', async function (req, res) {
    res.json({
        success: true,
        payload: await getAllWords(),
    });
});

// Get word by ID
router.get('/words/id/:id', async (req, res) => {
    const id = Number(req.params.id);
    res.json({
        success: true,
        payload: await getWordById(id),
    });
});

// Get words by theme

router.get('/words/themes/:theme', async (req, res) => {
    res.json({
        success: true,
        payload: await getWordByTheme(req.params.theme),
    });
});

// Delete word by ID

router.delete('/words/id/:id', async (req, res) => {
    const id = Number(req.params.id);
    res.json({
        success: true,
        payload: await deleteWordById(id),
    });
});

// Update word by ID

router.put('/words/id/:id', async (req, res) => {
    const id = Number(req.params.id);
    res.json({
        success: true,
        payload: await updateWordById(id, req.body),
    });
});

// Add word

router.post('/words', async (req, res) => {
    res.json({
        success: true,
        payload: await addWord(req.body),
    });
});

export default router;
