const express = require('express');

const app = express();

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
})

app.listen('4000' ,() => console.log("Server Started"));