const path = require('path');
const express = require('express');
const app = express();
const data = require('./data.json');
data.forEach(region => {
    console.log('region: ${region.region}');
    console.log('confirmed: ${region.confirmed}');
});

app.listen(7070,() =>{
	console.log("Escuchando en: http://localhost:7070")
});


const amazonas = data.find(region => region.region === "Amazonas");
console.log(amazonas);

app.get('/', (request, response) => {
	response.sendFile(path.resolve(__dirname,'index.html'));
});