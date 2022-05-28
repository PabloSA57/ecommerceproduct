const { Router } = require('express');

// SDK de Mercado Pago
const mercadopago = require ('mercadopago');
// Agrega credenciales
    mercadopago.configure({
        access_token: 'TEST-739088842609086-051001-af9c71c5a54e172eaf4cf0a28d9da9a2-582661966'
    });


const router = Router();

router.get('/mercadopago', (req, res) => {
    console.log(req.query);




    console.log(req.params)
    res.send('mercadopago');
})

router.post('/checkout', async (req, res) => {
    // Crea un objeto de preferencia
let preference = {
        items: [
        {
            title: 'Mi producto',
            unit_price: 100,
            quantity: 1,
        },
        {
            title: 'Producto 2',
            unit_price: 200,
            quantity: 1,
        }
        ]
    };

    try {
        const response = await mercadopago.preferences.create(preference);

        res.json(response);
    } catch (error) {
        res.status(500).send(error);
    }
    
})

module.exports = router;