function modelProductList(list) {
    let productsList = {};

    productsList.author = {}
    productsList.author.name = 'Maribel';
    productsList.author.lastname = 'Suppi';
  
    productsList.items = [];
  
    list.results.map((product) => {
      let item = {};
      item.id = product.id;
      item.title = product.title;
      item.price = {
        currency: product.currency_id,
        amount: product.price,
        decimals: 00
      }
      item.picture = product.thumbnail;
      item.condition = product.condition;
      item.free_shipping = product.shipping.free_shipping;
      item.address = product.address.state_name;
  
      productsList.items.push(item);
    });
  
    return productsList;
  }
  
  function modelOnlyProduct(prod) {
    let newProd = {};
    newProd.author = {}
    newProd.author.name = 'Maribel';
    newProd.author.lastname = 'Suppi';
  
    newProd.item = {};
    newProd.id = prod.id;
    newProd.title = prod.title;
    newProd.price = {
      currency: prod.currency_id,
      amount: prod.price,
      decimals: 00
    };
    newProd.picture = prod.pictures[0].url;
    newProd.condition = prod.condition;
    newProd.free_shipping = prod.shipping.free_shipping;
    newProd.sold_quantity = prod.sold_quantity;
  
    return newProd;
  }

function modelDescription (result){
    let newDecription = {};
    newDecription.author = {}
    newDecription.author.name = 'Maribel';
    newDecription.author.lastname = 'Suppi';

    newDecription.descriprion = result.plain_text;

    return newDecription
}


module.exports = {
    modelProductList , modelOnlyProduct, modelDescription
}