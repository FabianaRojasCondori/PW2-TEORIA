const path = require('path');
const express = require('express');
const app = express();
const data = require('./data.json');
const ctx = document.getElementById('myChart').getContext('2d');
data.forEach(region => {
    console.log(`region: ${region.region}`);
    console.log(`confirmed: ${region.confirmed}`);
    console.log(`recover: ${region.recover}`);
    console.log(`death: ${region.death}`);
    console.log(`hospital: ${region.hospital}`);
    console.log(`hospitaluci: ${region.hospitaluci}`);
    console.log(`nohospital: ${region.nohospital}`);

});

app.listen(7070,() =>{
	console.log("Escuchando en: http://localhost:7070")
});

const amazonas = data.find(region => region.region === "Amazonas");
console.log(amazonas);
const ancash = data.find(region => region.region === "Ancash");
console.log(ancash);
const apurimac = data.find(region => region.region === "Apurimac");
console.log(apurimac);
const arequipa = data.find(region => region.region === "Arequipa");
console.log(arequipa);
const ayacucho = data.find(region => region.region === "Ayacucho");
console.log(ayacucho);
const cajamarca = data.find(region => region.region === "Cajamarca");
console.log(cajamarca);
const callao = data.find(region => region.region === "Callao");
console.log(callao);
const cusco = data.find(region => region.region === "Cusco");
console.log(cusco);
const huancavelica = data.find(region => region.region === "Huancavelica");
console.log(huancavelica);
const huanuco = data.find(region => region.region === "Huanuco");
console.log(huanuco);
const ica = data.find(region => region.region === "Ica");
console.log(ica);
const junin = data.find(region => region.region === "Junin");
console.log(junin);
const laLibertad = data.find(region => region.region === "La Libertad");
console.log(laLibertad);
const lambayeque = data.find(region => region.region === "Lambayeque");
console.log(lambayeque);
const lima = data.find(region => region.region === "Lima");
console.log(lima);
const loreto = data.find(region => region.region === "Loreto");
console.log(loreto);
const madreDeDios = data.find(region => region.region === "Madre de Dios");
console.log(madreDeDios);
const moquegua = data.find(region => region.region === "Moquegua");
console.log(moquegua);
const pasco = data.find(region => region.region === "Pasco");
console.log(pasco);
const piura = data.find(region => region.region === "Piura");
console.log(piura);
const puno = data.find(region => region.region === "Puno");
console.log(puno);
const sanMartin = data.find(region => region.region === "San Martin");
console.log(sanMartin);
const tacna = data.find(region => region.region === "Tacna");
console.log(tacna);
const tumbes = data.find(region => region.region === "Tumbes");
console.log(tumbes);
const ucayali = data.find(region => region.region === "Ucayali");
console.log(ucayali);


app.get('/', (request, response) => {
	response.sendFile(path.resolve(__dirname,'index.html'));
});