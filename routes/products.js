const router = require('express').Router(); 
const jsonProductos = require("../models/productos")
const {modelProductList, modelOnlyProduct, modelDescription} = require('../models/products')
const {getSearchProducts, getOnlyProduct, getDesriptionProduct, getCategories} = require('./fetchApi')

router.get("/search",  (req, res) => {
    const query = req.query.q;
    let modelProdcut ;
    let setSearchProducts = getSearchProducts(query);

    setSearchProducts.then(prods =>{
      let category = prods.results[0].category_id;
      let setCategories = getCategories(category)
      
      setCategories.then((result)=>{
         modelProdcut =  modelProductList(prods , result)
         res.status(200).json(modelProdcut)
      })

      
      
    })
});

router.get("/:id",  (req, res) => {
    const request = req.params.id;
    let setOnlyProduct = getOnlyProduct(request)

    setOnlyProduct.then(prod =>{
      let category = prod.category_id;
      let setCategories = getCategories(category)

      setCategories.then((result)=>{
      let modelOnliProduct = modelOnlyProduct(prod, result)
      res.status(200).json(modelOnliProduct);

      })
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