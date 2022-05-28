const { Router } = require('express');

const router = Router();

const {Usuarios} = require('../db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//Register
router.post('/register', async (req, res) => {
    
    //Encriptar password
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(10))
    try {
        const user = await   Usuarios.create({
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: password,
            type: req.body.type
        });
        
        let token = jwt.sign({user: user}, 'pepe', {
            expiresIn: "24h"
        });
       // res.cookie('useToken', user[0].id)
        res.json({
            user: user,
            token: token
        });
    } catch (error) {
        console.log(error)
        res.status(500).json(error)  
    }

})


//Login
router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    console.log(email)

    try {
        const user = await Usuarios.findOne({
            where: {email: email},
            attributes:[  'id','name','lastname', 'email', 'password', 'type']
        });
        console.log(user)
        if(!user){
            res.status(404).json({msg: 'Usuario no encontrado'})
        }else{
            if(bcrypt.compareSync(password, user.password)){

                //Creamos el token
                let token = jwt.sign({user: user}, 'pepe', {
                    expiresIn: "24h"
                });

                //res.cookie('userToken', token)
                res.json(token)
            }else{
                res.status(401).json({msg: "Contraseña incorrecta"})
            }
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
    
    
})

module.exports = router;