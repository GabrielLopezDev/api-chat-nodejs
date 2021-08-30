const express = require('express');

const app = express();

app.use('/', (req, res) => {
	res.send('Funciona!');
});

app.listen(3000, () => {
	console.log('La app se esta ejecutando en el puerto 3000...');
});