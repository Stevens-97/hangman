import request from 'supertest';
import app from './app.js';
//prettier-ignore
describe(`HTTP request`, ()=>{
    it(`Should return a '200' response code and a res.body with the following structure:
    {success:true, payload: array}`, async () => {
        const expectedArray = 
            {
                theme: expect.any(String),
                word: expect.any(String),
                word_id: expect.any(Number),             
            }
        await request(app)
        .get('/words')
        .expect(200)
        .expect(function (res) {
            const actual = res.body  
            const expectedBody = {
                success: true,
                payload: expect.arrayContaining(expectedArray),
            }
            // expect(actual).toStrictEqual(expectedBody)
            actual.payload.forEach(function(word){
                expect(word).toEqual(expectedArray)
            })
        })
    })
    it(`Should return status 200 and also return a single object with the specific id identified
    and the following layout: {word_id: expect.any(Number), theme: expect.any(String), word: expect.any(String)}`,
     async ()=>{
        await request(app)
            .get("/words/id/1")
            .expect(200)
            .expect(function(res){
                const actual = res.body
                const expected = {
                    word_id: expect.any(Number),
                    theme: expect.any(String),
                    word: expect.any(String)
                }
                expect(actual).toStrictEqual(actual)
            })
    })
    it(`Should return status 200 and also return every word with a set theme as an array of objects
    with the following layout:{word_id: expect.any(Number), theme: expect.any(String), word: expect.any(String)}`,
    async ()=>{
        await request(app)
            .get("/words/themes/coding")
            .expect(200)
            .expect(function(res){
                const actual = res.body
                const expected = {
                    word_id: expect.any(Number),
                    theme: expect.any(String),
                    word: expect.any(String)
                }
                actual.payload.forEach((word)=>{
                    expect(word).toStrictEqual(expected)
                })
            })
    })
    it(`Should return status 200 and add a new word to the database and return what was created
    in the following format:{word_id: expect.any(Number), theme: expect.any(String), word: expect.any(String)}`,
    async ()=>{
        await request(app)
            .post("/words")
            .send({theme: "day", word: "day", })
            .expect(200)
            .expect(function(res){
                const actual = res.body
                const expected = {
                    word_id: expect.any(Number),
                    theme: expect.any(String),
                    word: expect.any(String)
                }
                actual.payload.forEach((word)=>{
                    expect(word).toStrictEqual(expected) 
                })
            })
    })
    it(`Should return a status of 200 and update a word by id, sending across a body and returning the following object
    {word_id: expect.any(Number), theme: expect.any(String), word: expect.any(String)}`,
    async()=>{
        await request(app)
            .put("/words/id/111")
            .send({theme: "night", word: "night", })
            .expect(200)
            .expect(function(res){
                const actual = res.body
                const expected = {
                    word_id: expect.any(Number),
                    theme: expect.any(String),
                    word: expect.any(String)
                }
                actual.payload.forEach((word)=>{
                    expect(word).toStrictEqual(expected)
                })
            })
    })
    it(`Should return a status of 200 and delete a word by id, returning the deleted
    row, which should have the layout as follows:
    {word_id: expect.any(Number), theme: expect.any(String), word: expect.any(String)}`,
    async()=>{
        await request(app)
            .delete("/words/id/111")
            .expect(200)
            .expect(function(res){
                const actual = res.body
                const expected = {
                    word_id: expect.any(Number),
                    theme: expect.any(String),
                    word: expect.any(String)
                }
                actual.payload.forEach((word)=>{
                    expect(word).toStrictEqual(expected)
                })
            })
    })
})
