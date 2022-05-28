const { Router } = require('express');

const router = Router();

const {Producto, Categoria} = require('../db.js');

router.post("/addproduct", async (req, res) => {
    const {name, imgurl, categoria} = req.body;

    try {
        const producto = await Producto.create({
            name,
            imgurl,
        })

        const tipoCategoria = await Categoria.findAll({
            where:{name: categoria}
        })

        producto.addCategoria(tipoCategoria);

        res.send(producto);
    } catch (error) {
        
    }
})

module.exports = router;