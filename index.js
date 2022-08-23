const express = require('express')
const app = express()
const port = 3040

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sion:sion1234@sion.lv7yv4h.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log('mongoDB Connected...')).catch(err => console.log(err));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})