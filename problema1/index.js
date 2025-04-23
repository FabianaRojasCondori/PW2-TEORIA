const express = require('express');
const path = require('path');
const app = express();
const data = require('./data.json');

app.use(express.static(path.join(__dirname)));

app.get('/', (request, response) => {
	response.sendFile(path.resolve(__dirname,'index.html'));
});

app.listen(7070,() =>{
	console.log("Escuchando en: http://localhost:7070")
});