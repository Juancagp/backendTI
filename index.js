const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Para parsear JSON
app.use(bodyParser.json());

// Array para simular almacenamiento de pedidos
const orders = [];

// Endpoint para recibir Webhook
app.post('/api/webhook', (req, res) => {
    console.log('⚡ Webhook recibido!');
    console.log(req.body);

    orders.push(req.body); // Guardar en memoria
    res.sendStatus(204); // Responder que está ok
});

// Endpoint para listar los pedidos que llegaron (para debug)
app.get('/api/orders', (req, res) => {
    res.json(orders);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
