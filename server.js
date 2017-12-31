const path = require('path');
const express = require('express');
const app = express();

const staticPath = path.join(__dirname, '/public');
app.use(express.static(staticPath))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extend:true}))

app.get('/',(req, res) => {
  res.sendFile(_dirname + 'index.html')
})

// app.get('/kitchen',(req, res) =>{
//   res.send('food')
// })

app.post('/quotes', (req, res) => {
  console.log(req.body)
})

app.listen(3000, () => {
  console.log('listening on 3000')
})
