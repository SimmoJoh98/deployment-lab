const express = require('express')
const path = require('path')

const app = express()

app.use('/js', express.static(path.join(__dirname, 'public/main.js')))

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

//send js to client
app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.js'))
})



  
const port = process.env.PORT || 4005
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})