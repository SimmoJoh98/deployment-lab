const express = require('express')
const path = require('path')

const app = express()

app.use('/js', express.static(path.join(__dirname, 'public/index.js')))
app.use('/css', express.static(path.join(__, , 'public/styles.css')))

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

//send js to client
app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.js'))
})

// send css to client
app.get('/css', (req,res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
})

  
const port = process.env.PORT || 4005
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})