
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://abc:123@databasemongoose-jwtda.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});

const Word = mongoose.model('Word', { 
    en : {type : String , require : true , trim : true , unique : true},
    vn : {type : String , require : true , trim : true },
    isMemorized : {type : Boolean , require : true,default : false}
});

//SELECT
// Word.find({})
// .then(words => console.log(words));

//INSERT
const word = new Word({en : 'One' , vn : 'Mot'});
word.save()
.then(w => console.log(w))
.catch(error => console.log(error.message));