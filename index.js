const express = require('express');
const {json} = require('body-parser');
const {Word} = require('./word.model');
var cors = require('cors')

const app = express();

app.use(json());
app.use(cors());

app.get('/words',(req,res) =>{
    Word.find({})
    .then(words => res.send({success : true , words}));
});
app.post('/word' ,(req,res) =>{
    const {en , vn} = req.body;
    const word = new Word({en  , vn });
    word.save()
    .then(w => {
        if(!w) throw new Error('DUPLICATE_VALUE')
        res.send({success : true , word : w})
    })
    .catch(error => res.send({success : false , message : error.message}));
})
app.put('/word/:_id',(req,res) => {
    const {_id} = req.params;
    const{isMemorized} = req.body;
    Word.findByIdAndUpdate(_id,{isMemorized} ,{new : true})
    .then(w => {
        if(!w) throw new Error("EMPTY_WORD");
        res.send({success : true , word : w});
    })
    .catch(error => res.send({success : false , message : error.message}));
});
app.delete('/word/:_id' , (req,res)=>{
    const{_id} = req.params;
    Word.findByIdAndRemove(_id)
    .then(w => {
        if(!w) throw new Error("EMPTY_WORD");
        res.send({success : true , word : w});
    })
    .catch(error => res.send({success : false , message : error.message}));

});

app.listen(process.env.PORT || '4000' ,() => console.log("Server Started"));