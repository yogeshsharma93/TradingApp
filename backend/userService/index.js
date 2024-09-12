const express = require('express')
//if there is a specific file to export
// const express = require('./xyz')
const app = express()
// GET, POST, PUT, DELETE

const person =[
    {
        id: 1,
        name: "Yogesh",
        email: "yogesh@gmail.com",
    },
    {
        id: 2,
        name: "Yogesh1",
        email: "yogesh@xyz.com",
    }
]
app.get('/hello', (req, res)=>{
    res.send('Hello')
})

app.get('/alluser', (req, res)=>{
    try{
        res.send(person)
    }
    catch(err){
        res.send('ERR')
    }
})
app.get('/alluser/:name', (req,res)=>{
try{
 let name = req.params.name
 //logic
 res.send(name)
}catch(err){
    res.send('ERR')
}
})
app.listen(3000, ()=>{
    console.log('Server started at port 3000')
}) //running application on port number 3000, port cannot be same for different app

