const express = require('express');
const router = express.Router();

router.get('/banco/test', (req, res)=>{
    const respuesta = {
        "Confirmation" : "yes"
    };
    res.json(respuesta);
});