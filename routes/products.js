const router = require('express').Router(); 
const jsonProductos = require("../models/productos")
const {modelProductList, modelOnlyProduct, modelDescription} = require('../models/products')
const {getSearchProducts, getOnlyProduct, getDesriptionProduct} = require('./fetchApi')

router.get("/search",  (req, res) => {
    const query = req.query.q;
    let setSearchProducts = getSearchProducts(query);

    setSearchProducts.then(prods =>{
      let modelProdcut = modelProductList(prods)
      res.status(200).json(modelProdcut)
    })
});


router.get("/:id",  (req, res) => {
    const request = req.params.id;
    let setOnlyProduct = getOnlyProduct(request)

    setOnlyProduct.then(prod =>{
      let modelOnliProduct = modelOnlyProduct(prod)
      res.status(200).json(modelOnliProduct);
    })
    
  });

router.get("/:id/description",  (req, res) => {
    const request = req.params.id;
    let setDesriptionProduct = getDesriptionProduct(request)

    setDesriptionProduct.then(result => {
      let modelDescriptions = modelDescription(result)
      res.status(200).json( modelDescriptions );
    })
  });

module.exports = router;