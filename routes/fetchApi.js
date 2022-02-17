require('isomorphic-fetch');
const URL = 'https://api.mercadolibre.com';

function getSearchProducts(query) {
	return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
		.then((response) => {
			if(response.status !== 200) {
				console.log(`error: ${response.status}`);
                return;
			}
			return response.json();
		})
}

function getOnlyProduct(prodID) {
	return fetch(`https://api.mercadolibre.com/items/${prodID}`)
		.then((response) => {
			if(response.status !== 200) {
				console.log(`error: ${response.status}`);
				return;
			}
			return response.json();
		});
}

function getDesriptionProduct(prodID) {
	return fetch(`https://api.mercadolibre.com/items/${prodID}/description`)
		.then((response) => {
			if(response.status !== 200) {
				console.log(`error ${response.status}`);
				return;
			}
			return response.json();
		});
}

function getCategories(categ) {
	return fetch(`https://api.mercadolibre.com/categories/${categ}`)
		.then((response) => {
			if(response.status !== 200) {
				console.log(`error ${response.status}`);
				return;
			}
			return response.json();
		});
}

module.exports = { getSearchProducts, getOnlyProduct, getDesriptionProduct, getCategories};

