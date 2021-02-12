const {Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('96179447ee60a879fd40d956356851e7583951472848375fec2ad79d8b6bfbc3');
const myWalletAddress = myKey.getPublic('hex');


let elliotCoin = new Blockchain();
//un voto

//console.log('My balance inicial',elliotCoin.getBalanceOfAddress('elliots-wallet'));
//console.log('Balance inicial Henry',elliotCoin.getBalanceOfAddress('henrys-wallet'));
//const tx1 = new Transaction('elliots-wallet','042dd76a9a58d65cdf0e44025606b6d9b7b04412f9b47562b39c468f51aa3525f8f0fbdab67851a3dc8941eae20e43a69607470ef025cf054bd151095c454c3f09',1);
//tx1.signTransaction(myKey);
//elliotCoin.addTransaction(tx1);

//elliotCoin.createTransaction(new Transaction('address1','address2', 100));
//elliotCoin.createTransaction(new Transaction('address2','address1', 50));


//console.log('\nStarting the miner...');
//elliotCoin.minePendingTransactions('henrys-wallet');//recompensa

//console.log('\nBalance of henry is', elliotCoin.getBalanceOfAddress('henrys-wallet'));

//const tx2 = new Transaction('elliots-wallet','public keys goes here',1);
//tx2.signTransaction(myKey);
//elliotCoin.addTransaction(tx2);

//console.log('\nStarting the miner again...');
//elliotCoin.minePendingTransactions('henrys-wallet');

//console.log('\nBalance of henry is', elliotCoin.getBalanceOfAddress('henrys-wallet'));
//console.log('\nBalance of my is', elliotCoin.getBalanceOfAddress('elliots-wallet'));

//console.log('Is chain valid?' , elliotCoin.isChainValid());
//eliminando voto inicial 

console.log('Cantidad de votos para Henry',elliotCoin.getBalanceOfAddress('henry'));


const inicialA = new Transaction('A','sistema_de_votos',1);
elliotCoin.addTransaction(inicialA);
elliotCoin.minePendingTransactions('fulano');
const inicialB = new Transaction('B','sistema_de_votos',1);
elliotCoin.addTransaction(inicialB);
elliotCoin.minePendingTransactions('fulano');


const tx1 = new Transaction('elliot','A',1);
elliotCoin.addTransaction(tx1);
console.log('\nComenzando a minar voto');
elliotCoin.minePendingTransactions('sistema_de_votos');

const tx2 = new Transaction('henry','B',1);
elliotCoin.addTransaction(tx2);
console.log('\nComenzando a minar voto');
elliotCoin.minePendingTransactions('sistema_de_votos');

const tx3 = new Transaction('cruz','A',1);
elliotCoin.addTransaction(tx3);
console.log('\nComenzando a minar voto');
elliotCoin.minePendingTransactions('sistema_de_votos');

console.log('\nVotos restante para Elliot',elliotCoin.getBalanceOfAddress('elliot'));
console.log('\nVotos restante para Henry',elliotCoin.getBalanceOfAddress('henry'));
console.log('\nVotos Candidato A',elliotCoin.getBalanceOfAddress('A'));
console.log('\nVotos Candidato B',elliotCoin.getBalanceOfAddress('B'));


//console.log('Mining block 1...');
//elliotCoin.addBlock(new Block(1,"10/07/2017",{ amount: 4 }));

//console.log('Mining block 2...');
//elliotCoin.addBlock(new Block(2,"10/07/2017",{ amount: 10 }));

//console.log('Mining block 3...');
//elliotCoin.addBlock(new Block(3,"10/07/2017",{ amount: 1 }));

//console.log('Mining block 4...');
//elliotCoin.addBlock(new Block(4,"10/07/2017",{ amount: 9 }));


//console.log(JSON.stringify(elliotCoin, null, 4)); 
//imprime los 3 bloques

//console.log('Is blockchain valid? ' + elliotCoin.isChainValid());

//elliotCoin.chain[1].data = {amount : 100 };
//elliotCoin.chain[1].hash = elliotCoin.chain[1].calculateHash();

//console.log('Is blockchain valid? ' + elliotCoin.isChainValid());

































































