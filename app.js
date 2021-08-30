const express = require("express");

const router = require('./network/routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

router(app);

app.listen(3000, () => {
	console.log("La app se esta ejecutando en el puerto 3000...");
});
