const router = require('express').Router(); 
const jsonProductos = require("../models/productos")


router.get("/",  (req, res) => {
    res.status(200).json(jsonProductos);
  });

router.get("/:id",  (req, res) => {
    const placeId = req.params.id;
    const place = jsonProductos.productos.items.find(p => {
            return ":" + p.id === placeId;
        
      });
    const author = jsonProductos.productos.author;
    res.json({author, place});
  });

module.exports = router;