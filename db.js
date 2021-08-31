const db = require('mongoose');

const connect = async (uri, options) => {
	await db.connect(uri, options).then(
		() => { console.log('[db] Conectada con éxito') },
		err => { console.log('[db] ERROR: No se pudo conectar...', err) }
	);
}

module.exports = {
	connect
};