const express = require ("express")
const path = require("path")

const app = express();
const port = 80;

//Set new template engine//
app.set('view engine','pug')

//Set the viewdirectery//
app.set('views', path.join(__dirname,'views'))

app.use('/static', express.static('static'))


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)
})