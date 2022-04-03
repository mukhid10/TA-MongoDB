const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

const allRouter = require('./routes/index')

const uri = "mongodb+srv://ta-mongodb:ta-mongodb123@cluster0.qp4m5.mongodb.net/skiljek?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(()=>console.log("berhasil connect"))
  .catch(()=>console.log("gaagal connect"))

app.use(express.json())
app.use(allRouter)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})