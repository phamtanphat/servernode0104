const express = require('express');
const {json} = require('body-parser');

const app = express();

app.use(json());

app.get('/cong/:a/:b' , (req , res) => {
    const {a , b} = req.params;
    
    let tinhtoan = new Promise((resolve , reject) =>{
       setTimeout(() => {
        if(isNaN(a) || isNaN(b)){
            reject("INVALID_TYPE");
        }
        let ketqua = +a + +b;
        resolve(ketqua);        
       });
    })
    tinhtoan.then(ketqua => console.log(ketqua))
    .catch(error => console.log(error));
});

app.put("/chia" , (req,res) =>{
    const {a , b} = req.body;
    if(isNaN(a) || isNaN(b)){
        return res.send({success : false , message : 'INVALID_TYPE'});
    }
    const ketqua = +a + +b;
    res.send({success : true , ketqua});
});

app.listen('4000' ,() => console.log("Server Started"));