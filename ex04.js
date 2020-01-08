const express = require('express');
const server = express();

server.route('/clientes')
.get( (req, res) => res.send('LISTA DE CLIENTES') )
.post( (req, res) => res.send('NOVO CLIENTE') )
.put( (req, res) => res.send('ALTERAR CLIENTE') )
.delete( (req, res) => res.send('REMOVE CLIENTE') );

server.listen(3000, () => console.log('Servidor online'));