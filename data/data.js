import * as rawData from './rawData.js'
import createArray from '../models-data/createArray.js'

// console.log(createArray(rawData.arrayForGeneral))
// console.log(createArray(rawData.arrayforCoding))
// console.log(createArray(rawData.arrayforGames))
// console.log(createArray(rawData.arrayforMovies))
// console.log(createArray(rawData.arrayforNature))
// console.log(createArray(rawData.arrayforScience))
// console.log(createArray(rawData.arrayforSports))

export const themes = [
    'generalWords',
    'codingWords',
    'gamingWords',
    'movieWords',
    'natureWords',
    'scienceWords',
    'sportsWords',
]

export const generalWords = createArray(rawData.arrayForGeneral, 'general')

export const codingWords = createArray(rawData.arrayforCoding, 'coding')

export const gamingWords = createArray(rawData.arrayforGames, 'gaming')

export const movieWords = createArray(rawData.arrayforMovies, 'movie')

export const natureWords = createArray(rawData.arrayforNature, 'nature')

export const scienceWords = createArray(rawData.arrayforScience, 'science')

export const sportsWords = createArray(rawData.arrayforSports, 'sports')
