const express = require("express");
const app = express();
//my port number
const port = process.env.PORT || 3000;
//require mongoose library
const mongoose = require("mongoose");
//middleware
app.use(express.json());
// app.use(require(".router/rout"));
const route = require('./routes/routes')
app.use('/',route)
//mongoose connect
// mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://Anugya12bansal:tOGUq3cRjmdmB8UU@cluster0.yutob9i.mongodb.net/anu01",{
    useNewUrlParser:true
})
.then(()=>{
    console.log("MongoDB is connected");
})
.catch((error)=>{
    console.log("no connected");
})
app.listen(port,()=>console.log(`Example app running on port ${port}!`))

// mongoose.connect("mongodb://localhost:27017/curdOperation",{
//     useNewUrlParser:true
// })