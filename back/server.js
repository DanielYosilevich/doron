const express = require('express')
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('public'))

app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true
}));

app.use(bodyParser.json())

const PORT = process.env.PORT || 3009;

if (PORT !== 3009) {
  app.get('/[^\.]+$', function (req, res) {
    res.set('Content-Type', 'text/html')
      .sendFile(path.join(__dirname, '/public/index.html'));
  });
}

app.listen(PORT, () => console.log(`Server ready at port ${PORT}`))

