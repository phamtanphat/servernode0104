const express = require('express');
const {json} = require('body-parser');
const {Word} = require('./word.model');
const app = express();

app.use(json());

app.get('/words',(req,res) =>{
    Word.find({})
    .then(words => res.send({success : words}));
});
app.post('/word' ,(req,res) =>{
    const {en , vn} = req.body;
    const word = new Word({en  , vn });
    word.save()
    .then(w => {
        if(!w) throw new Error('DUPLICATE_VALUE')
        return res.send({success : true , word : w})
    })
    .catch(error => res.send({success : false , message : error.message}));
})

app.listen('4000' ,() => console.log("Server Started"));