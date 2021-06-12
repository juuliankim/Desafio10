const express = require('express')
const router = express.Router()

const controller = require('../api/productos')

router.get('/', (req, res) => {
    res.send('Bienvenido al servidor express');
});

router.get('/productos', (req, res) => {
    try {
        res.status(200).send(controller.check());    
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/productos/:id', (req, res) => {
    try {
        res.send(controller.checkId(parseInt(req.params.id)));
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post('/productos/guardar/',(req, res)=>{
    try {
        res.send(controller.save(req.body));
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.put('/productos/actualizar/:id',(req,res)=>{
    try {
        let update = {
            title: req.body.title,
            price: req.body.price,
            thumbnail: req.body.thumbnail
        };
        res.send(controller.update(req.params.id, update));
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.delete('/productos/borrar/:id',(req,res)=>{
    try {
        res.send(controller.delete(req.params.id));
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/productos/vista', (req, res) => {
    const items = controller.check()
    res.render('vista', {Products: items})
});

module.exports = router;