const EC = require('elliptic').ec;

const ec = new EC('secp256k1');

const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');

console.log();
console.log('Tu clave publica (Direccion de tu billetera, Puedes compartirla)\n', publicKey);

console.log();
console.log('Tu clave privada (Guardala en secreto! Para firmar transacciones)\n', privateKey);