'use strict';

const express = require('express'),
  app = express();

app.use(express.static('public'));


app.listen(3000, function(){
  console.log('app is up and running');
  console.log('http://localhost:3000');
})
