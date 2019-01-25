const express = require('express')

const app = express()

app.get('/', function(req, res) {
  res.send('Hello world')
})

app.listen('4455', function() {
  console.log('Listen on port :4455')
})