import * as rawData from './rawData.js'
import createArray from '../models-data/createArray.js'

// console.log(createArray(rawData.arrayForGeneral))
// console.log(createArray(rawData.arrayforCoding))
// console.log(createArray(rawData.arrayforGames))
// console.log(createArray(rawData.arrayforMovies))
// console.log(createArray(rawData.arrayforNature))
// console.log(createArray(rawData.arrayforScience))
console.log(createArray(rawData.arrayforSports))

const generalWords = [
    {
        id: 1,
        word: 'petite',
        wordLength: 6,
        letters: ['p', 'e', 't', 'i', 't', 'e'],
    },
    {
        id: 2,
        word: 'glance',
        wordLength: 6,
        letters: ['g', 'l', 'a', 'n', 'c', 'e'],
    },
    {
        id: 3,
        word: 'shirt',
        wordLength: 5,
        letters: ['s', 'h', 'i', 'r', 't'],
    },
    {
        id: 4,
        word: 'plod',
        wordLength: 4,
        letters: ['p', 'l', 'o', 'd'],
    },
    {
        id: 5,
        word: 'light',
        wordLength: 5,
        letters: ['l', 'i', 'g', 'h', 't'],
    },
    {
        id: 6,
        word: 'coil',
        wordLength: 4,
        letters: ['c', 'o', 'i', 'l'],
    },
    {
        id: 7,
        word: 'worm',
        wordLength: 4,
        letters: ['w', 'o', 'r', 'm'],
    },
    {
        id: 8,
        word: 'leave',
        wordLength: 5,
        letters: ['l', 'e', 'a', 'v', 'e'],
    },
    {
        id: 9,
        word: 'worship',
        wordLength: 7,
        letters: ['w', 'o', 'r', 's', 'h', 'i', 'p'],
    },
    {
        id: 10,
        word: 'education',
        wordLength: 9,
        letters: ['e', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n'],
    },
    {
        id: 11,
        word: 'boil',
        wordLength: 4,
        letters: ['b', 'o', 'i', 'l'],
    },
    {
        id: 12,
        word: 'building',
        wordLength: 8,
        letters: ['b', 'u', 'i', 'l', 'd', 'i', 'n', 'g'],
    },
    {
        id: 13,
        word: 'knit',
        wordLength: 4,
        letters: ['k', 'n', 'i', 't'],
    },
    {
        id: 14,
        word: 'health',
        wordLength: 6,
        letters: ['h', 'e', 'a', 'l', 't', 'h'],
    },
    {
        id: 15,
        word: 'mark',
        wordLength: 4,
        letters: ['m', 'a', 'r', 'k'],
    },
]

const codingWords = [
    {
        id: 1,
        word: 'string',
        wordLength: 6,
        letters: ['s', 't', 'r', 'i', 'n', 'g'],
    },
    {
        id: 2,
        word: 'array',
        wordLength: 5,
        letters: ['a', 'r', 'r', 'a', 'y'],
    },
    {
        id: 3,
        word: 'boolean',
        wordLength: 7,
        letters: ['b', 'o', 'o', 'l', 'e', 'a', 'n'],
    },
    {
        id: 4,
        word: 'null',
        wordLength: 4,
        letters: ['n', 'u', 'l', 'l'],
    },
    {
        id: 5,
        word: 'number',
        wordLength: 6,
        letters: ['n', 'u', 'm', 'b', 'e', 'r'],
    },
    {
        id: 6,
        word: 'bigint',
        wordLength: 6,
        letters: ['b', 'i', 'g', 'i', 'n', 't'],
    },
    {
        id: 7,
        word: 'symbol',
        wordLength: 6,
        letters: ['s', 'y', 'm', 'b', 'o', 'l'],
    },
    {
        id: 8,
        word: 'jest',
        wordLength: 4,
        letters: ['j', 'e', 's', 't'],
    },
    {
        id: 9,
        word: 'supertest',
        wordLength: 9,
        letters: ['s', 'u', 'p', 'e', 'r', 't', 'e', 's', 't'],
    },
    {
        id: 10,
        word: 'nodemon',
        wordLength: 7,
        letters: ['n', 'o', 'd', 'e', 'm', 'o', 'n'],
    },
    {
        id: 11,
        word: 'cascading',
        wordLength: 9,
        letters: ['c', 'a', 's', 'c', 'a', 'd', 'i', 'n', 'g'],
    },
    {
        id: 12,
        word: 'mocha',
        wordLength: 5,
        letters: ['m', 'o', 'c', 'h', 'a'],
    },
    {
        id: 13,
        word: 'cypress',
        wordLength: 7,
        letters: ['c', 'y', 'p', 'r', 'e', 's', 's'],
    },
    {
        id: 14,
        word: 'prettier',
        wordLength: 8,
        letters: ['p', 'r', 'e', 't', 't', 'i', 'e', 'r'],
    },
    {
        id: 15,
        word: 'eslint',
        wordLength: 6,
        letters: ['e', 's', 'l', 'i', 'n', 't'],
    },
    {
        id: 16,
        word: 'touppercase',
        wordLength: 11,
        letters: ['t', 'o', 'u', 'p', 'p', 'e', 'r', 'c', 'a', 's', 'e'],
    },
    { id: 17, word: 'req', wordLength: 3, letters: ['r', 'e', 'q'] },
]

const gamingWords = [
    {
        id: 1,
        word: 'minecraft',
        wordLength: 9,
        letters: ['m', 'i', 'n', 'e', 'c', 'r', 'a', 'f', 't'],
    },
    {
        id: 2,
        word: 'fortnite',
        wordLength: 8,
        letters: ['f', 'o', 'r', 't', 'n', 'i', 't', 'e'],
    },
    {
        id: 3,
        word: 'halo',
        wordLength: 4,
        letters: ['h', 'a', 'l', 'o'],
    },
    {
        id: 4,
        word: 'residentevil',
        wordLength: 12,
        letters: ['r', 'e', 's', 'i', 'd', 'e', 'n', 't', 'e', 'v', 'i', 'l'],
    },
    {
        id: 5,
        word: 'hades',
        wordLength: 5,
        letters: ['h', 'a', 'd', 'e', 's'],
    },
    { id: 6, word: 'wow', wordLength: 3, letters: ['w', 'o', 'w'] },
    {
        id: 7,
        word: 'half-life',
        wordLength: 9,
        letters: ['h', 'a', 'l', 'f', '-', 'l', 'i', 'f', 'e'],
    },
    {
        id: 8,
        word: 'portal',
        wordLength: 6,
        letters: ['p', 'o', 'r', 't', 'a', 'l'],
    },
    {
        id: 9,
        word: 'forza',
        wordLength: 5,
        letters: ['f', 'o', 'r', 'z', 'a'],
    },
    {
        id: 10,
        word: 'psychonauts',
        wordLength: 11,
        letters: ['p', 's', 'y', 'c', 'h', 'o', 'n', 'a', 'u', 't', 's'],
    },
    {
        id: 11,
        word: 'prey',
        wordLength: 4,
        letters: ['p', 'r', 'e', 'y'],
    },
    {
        id: 12,
        word: 'skyrim',
        wordLength: 6,
        letters: ['s', 'k', 'y', 'r', 'i', 'm'],
    },
    {
        id: 13,
        word: 'oblivion',
        wordLength: 8,
        letters: ['o', 'b', 'l', 'i', 'v', 'i', 'o', 'n'],
    },
    {
        id: 14,
        word: 'kotor',
        wordLength: 5,
        letters: ['k', 'o', 't', 'o', 'r'],
    },
    {
        id: 15,
        word: 'morrowind',
        wordLength: 9,
        letters: ['m', 'o', 'r', 'r', 'o', 'w', 'i', 'n', 'd'],
    },
    {
        id: 16,
        word: 'hitman',
        wordLength: 6,
        letters: ['h', 'i', 't', 'm', 'a', 'n'],
    },
]

const movieWords = [
    {
        id: 1,
        word: 'poltergeist',
        wordLength: 11,
        letters: ['p', 'o', 'l', 't', 'e', 'r', 'g', 'e', 'i', 's', 't'],
    },
    {
        id: 2,
        word: 'fences',
        wordLength: 6,
        letters: ['f', 'e', 'n', 'c', 'e', 's'],
    },
    {
        id: 3,
        word: 'warrior',
        wordLength: 7,
        letters: ['w', 'a', 'r', 'r', 'i', 'o', 'r'],
    },
    {
        id: 4,
        word: 'blade',
        wordLength: 5,
        letters: ['b', 'l', 'a', 'd', 'e'],
    },
    {
        id: 5,
        word: 'heat',
        wordLength: 4,
        letters: ['h', 'e', 'a', 't'],
    },
    { id: 6, word: 'saw', wordLength: 3, letters: ['s', 'a', 'w'] },
    {
        id: 7,
        word: 'dracula',
        wordLength: 7,
        letters: ['d', 'r', 'a', 'c', 'u', 'l', 'a'],
    },
    {
        id: 8,
        word: 'twins',
        wordLength: 5,
        letters: ['t', 'w', 'i', 'n', 's'],
    },
    {
        id: 9,
        word: 'riddick',
        wordLength: 7,
        letters: ['r', 'i', 'd', 'd', 'i', 'c', 'k'],
    },
    {
        id: 10,
        word: 'madmax',
        wordLength: 6,
        letters: ['m', 'a', 'd', 'm', 'a', 'x'],
    },
    {
        id: 11,
        word: 'prometheus',
        wordLength: 10,
        letters: ['p', 'r', 'o', 'm', 'e', 't', 'h', 'e', 'u', 's'],
    },
    {
        id: 12,
        word: 'madagascar',
        wordLength: 10,
        letters: ['m', 'a', 'd', 'a', 'g', 'a', 's', 'c', 'a', 'r'],
    },
    {
        id: 13,
        word: 'kick-ass',
        wordLength: 8,
        letters: ['k', 'i', 'c', 'k', '-', 'a', 's', 's'],
    },
    { id: 14, word: 'rio', wordLength: 3, letters: ['r', 'i', 'o'] },
    { id: 15, word: 'up', wordLength: 2, letters: ['u', 'p'] },
    {
        id: 16,
        word: 'rocky',
        wordLength: 5,
        letters: ['r', 'o', 'c', 'k', 'y'],
    },
]

const natureWords = [
    {
        id: 1,
        word: 'flower',
        wordLength: 6,
        letters: ['f', 'l', 'o', 'w', 'e', 'r'],
    },
    {
        id: 2,
        word: 'grass',
        wordLength: 5,
        letters: ['g', 'r', 'a', 's', 's'],
    },
    { id: 3, word: 'sun', wordLength: 3, letters: ['s', 'u', 'n'] },
    {
        id: 4,
        word: 'moon',
        wordLength: 4,
        letters: ['m', 'o', 'o', 'n'],
    },
    {
        id: 5,
        word: 'butterfly',
        wordLength: 9,
        letters: ['b', 'u', 't', 't', 'e', 'r', 'f', 'l', 'y'],
    },
    {
        id: 6,
        word: 'arachnid',
        wordLength: 8,
        letters: ['a', 'r', 'a', 'c', 'h', 'n', 'i', 'd'],
    },
    {
        id: 7,
        word: 'squirrel',
        wordLength: 8,
        letters: ['s', 'q', 'u', 'i', 'r', 'r', 'e', 'l'],
    },
    {
        id: 8,
        word: 'survival',
        wordLength: 8,
        letters: ['s', 'u', 'r', 'v', 'i', 'v', 'a', 'l'],
    },
    {
        id: 9,
        word: 'creature',
        wordLength: 8,
        letters: ['c', 'r', 'e', 'a', 't', 'u', 'r', 'e'],
    },
    {
        id: 10,
        word: 'nocturnal',
        wordLength: 9,
        letters: ['n', 'o', 'c', 't', 'u', 'r', 'n', 'a', 'l'],
    },
    {
        id: 11,
        word: 'canter',
        wordLength: 6,
        letters: ['c', 'a', 'n', 't', 'e', 'r'],
    },
    {
        id: 12,
        word: 'hibernate',
        wordLength: 9,
        letters: ['h', 'i', 'b', 'e', 'r', 'n', 'a', 't', 'e'],
    },
    {
        id: 13,
        word: 'winter',
        wordLength: 6,
        letters: ['w', 'i', 'n', 't', 'e', 'r'],
    },
    {
        id: 14,
        word: 'spring',
        wordLength: 6,
        letters: ['s', 'p', 'r', 'i', 'n', 'g'],
    },
    {
        id: 15,
        word: 'fall',
        wordLength: 4,
        letters: ['f', 'a', 'l', 'l'],
    },
]

const scienceWords = [
    {
        id: 1,
        word: 'acid',
        wordLength: 4,
        letters: ['a', 'c', 'i', 'd'],
    },
    {
        id: 2,
        word: 'argon',
        wordLength: 5,
        letters: ['a', 'r', 'g', 'o', 'n'],
    },
    {
        id: 3,
        word: 'atoms',
        wordLength: 5,
        letters: ['a', 't', 'o', 'm', 's'],
    },
    {
        id: 4,
        word: 'bacteria',
        wordLength: 8,
        letters: ['b', 'a', 'c', 't', 'e', 'r', 'i', 'a'],
    },
    {
        id: 5,
        word: 'biome',
        wordLength: 5,
        letters: ['b', 'i', 'o', 'm', 'e'],
    },
    {
        id: 6,
        word: 'catalyst',
        wordLength: 8,
        letters: ['c', 'a', 't', 'a', 'l', 'y', 's', 't'],
    },
    {
        id: 7,
        word: 'ecosystem',
        wordLength: 9,
        letters: ['e', 'c', 'o', 's', 'y', 's', 't', 'e', 'm'],
    },
    {
        id: 8,
        word: 'electrolysis',
        wordLength: 12,
        letters: ['e', 'l', 'e', 'c', 't', 'r', 'o', 'l', 'y', 's', 'i', 's'],
    },
    {
        id: 9,
        word: 'galaxy',
        wordLength: 6,
        letters: ['g', 'a', 'l', 'a', 'x', 'y'],
    },
    {
        id: 10,
        word: 'lithium',
        wordLength: 7,
        letters: ['l', 'i', 't', 'h', 'i', 'u', 'm'],
    },
    {
        id: 11,
        word: 'momentum',
        wordLength: 8,
        letters: ['m', 'o', 'm', 'e', 'n', 't', 'u', 'm'],
    },
    {
        id: 12,
        word: 'phloem',
        wordLength: 6,
        letters: ['p', 'h', 'l', 'o', 'e', 'm'],
    },
    {
        id: 13,
        word: 'planet',
        wordLength: 6,
        letters: ['p', 'l', 'a', 'n', 'e', 't'],
    },
    {
        id: 14,
        word: 'predator',
        wordLength: 8,
        letters: ['p', 'r', 'e', 'd', 'a', 't', 'o', 'r'],
    },
    {
        id: 15,
        word: 'quark',
        wordLength: 5,
        letters: ['q', 'u', 'a', 'r', 'k'],
    },
    {
        id: 16,
        word: 'symbiosis',
        wordLength: 9,
        letters: ['s', 'y', 'm', 'b', 'i', 'o', 's', 'i', 's'],
    },
]

const sportsWords = [
    {
        id: 1,
        word: 'aerobics',
        wordLength: 8,
        letters: ['a', 'e', 'r', 'o', 'b', 'i', 'c', 's'],
    },
    {
        id: 2,
        word: 'athlete',
        wordLength: 7,
        letters: ['a', 't', 'h', 'l', 'e', 't', 'e'],
    },
    {
        id: 3,
        word: 'basketball',
        wordLength: 10,
        letters: ['b', 'a', 's', 'k', 'e', 't', 'b', 'a', 'l', 'l'],
    },
    {
        id: 4,
        word: 'bobsleigh',
        wordLength: 9,
        letters: ['b', 'o', 'b', 's', 'l', 'e', 'i', 'g', 'h'],
    },
    {
        id: 5,
        word: 'championship',
        wordLength: 12,
        letters: ['c', 'h', 'a', 'm', 'p', 'i', 'o', 'n', 's', 'h', 'i', 'p'],
    },
    {
        id: 6,
        word: 'exercise',
        wordLength: 8,
        letters: ['e', 'x', 'e', 'r', 'c', 'i', 's', 'e'],
    },
    {
        id: 7,
        word: 'gymnastics',
        wordLength: 10,
        letters: ['g', 'y', 'm', 'n', 'a', 's', 't', 'i', 'c', 's'],
    },
    {
        id: 8,
        word: 'karate',
        wordLength: 6,
        letters: ['k', 'a', 'r', 'a', 't', 'e'],
    },
    {
        id: 9,
        word: 'lacrosse',
        wordLength: 8,
        letters: ['l', 'a', 'c', 'r', 'o', 's', 's', 'e'],
    },
    {
        id: 10,
        word: 'offense',
        wordLength: 7,
        letters: ['o', 'f', 'f', 'e', 'n', 's', 'e'],
    },
    {
        id: 11,
        word: 'paddling',
        wordLength: 8,
        letters: ['p', 'a', 'd', 'd', 'l', 'i', 'n', 'g'],
    },
    {
        id: 12,
        word: 'sportsmanship',
        wordLength: 13,
        letters: [
            's',
            'p',
            'o',
            'r',
            't',
            's',
            'm',
            'a',
            'n',
            's',
            'h',
            'i',
            'p',
        ],
    },
    {
        id: 13,
        word: 'teammate',
        wordLength: 8,
        letters: ['t', 'e', 'a', 'm', 'm', 'a', 't', 'e'],
    },
    {
        id: 14,
        word: 'umpire',
        wordLength: 6,
        letters: ['u', 'm', 'p', 'i', 'r', 'e'],
    },
    {
        id: 15,
        word: 'weights',
        wordLength: 7,
        letters: ['w', 'e', 'i', 'g', 'h', 't', 's'],
    },
]
