const router = require('express').Router(); 
const jsonProductos = require("../models/productos")


router.get("/",  (req, res) => {
    res.status(200).json(jsonProductos);
  });

router.get("/:id",  (req, res) => {
    const request = req.params.id;
    const response = jsonProductos.productos.items.find(p => {
            return ":" + p.id === request;
        
      });
    const author = jsonProductos.productos.author;
    res.status(200).json({author, response});
  });

module.exports = router;