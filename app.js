const express=require('express');
const app=express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public')); 



const server = app.listen(process.env.PORT || 3000, () => {
  console.log('Esta Vivo');
});