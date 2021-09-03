const express = require("express");
const cors = require('cors');

const db = require('./db');
const router = require('./network/routes');
const socket = require('./socket');

const uri = 'mongodb://localhost:27017/api-chat';
const options = {useNewUrlParser: true, useUnifiedTopology: true};
db.connect(uri, options);

const app = express();
const server = require('http').Server(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/app', express.static('public'));

socket.connect(server);
router(app);

server.listen(3000, () => {
	console.log("La app se esta ejecutando en el puerto 3000...");
});
