const express = require("express");

const db = require('./db');
const router = require('./network/routes');

const uri = 'mongodb://localhost:27017/api-chat';
const options = {useNewUrlParser: true, useUnifiedTopology: true};
db.connect(uri, options);

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

router(app);

app.listen(3000, () => {
	console.log("La app se esta ejecutando en el puerto 3000...");
});
