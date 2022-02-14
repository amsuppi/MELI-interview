let productos = 
    {
        "author": {
                "name": "Maribel",
                "lastname": "Suppi",
            },
        "categories" : [
                "Celulares", 
                "Electrodomesticos", 
                "Automotores",
            ],
        "items": [
                {
                "id": "1", 
                "title": "apple ipod touch silver- 35gb", 
                "price": {
                        "currency": "48.500", 
                        "amount": 3, 
                        "decimals": 500
                },
                "picture": "https://http2.mlstatic.com/D_NQ_NP_955930-MLA45878166410_052021-V.webp", 
                "condition": "new", 
                "free_shipping": true,
                "sold_quantity": 1,
                "description": "Con más poder todos ganan. Gracias al chip A10 Fusion, el iPod touch te ofrece una gran experiencia de juego. La acción es más fluida, los detalles son más nítidos y todo se siente mucho más real. El chip A10 Fusion ofrece un rendimiento hasta dos veces más rápido y gráficos tres veces mejores, sin disminuir la duración de la batería del nuevo iPod touch. Con él puedes disfrutar de juegos y apps de realidad aumentada, y todo se siente más rápido y fluido."
                },
                {
                    "id": "2", 
                    "title": "apple ipod nano, flim tricapa", 
                    "price": {
                            "currency": "450", 
                            "amount": 3, 
                            "decimals": 500
                    },
                    "picture": "https://http2.mlstatic.com/D_NQ_NP_815013-MLA29628102537_032019-V.webp", 
                    "condition": "used", 
                    "free_shipping": true,
                    "sold_quantity": 2,
                    "description": "TECH-SERVICES - MERCADOLIBRE PLATINUM MAS DE 2 DECADAS EN EL SITIO"
                },
                {
                    "id": "3", 
                    "title": "apple ipod Touch 32 Gb Modelo A1574 Silver", 
                    "price": {
                            "currency": "40.900", 
                            "amount": 3, 
                            "decimals": 5
                    },
                    "picture": "https://http2.mlstatic.com/D_NQ_NP_917067-MLA42974897338_082020-O.webp", 
                    "condition": "used", 
                    "free_shipping": false,
                    "sold_quantity": 0,
                    "description": `iPod touch (sexta generación, 
                    Color: Silver Navegación: pantalla Multi-Touch
                    Capacidad: 32G
                    Modelo: A1574
                    Cámara iSight y una cámara FaceTime HD.
                    Dimensiones:
                    Alto: 12,34 cm
                    Ancho: 5,86 cm
                    Grosor: 0,61 cm`
                },
                {
                    "id": "4", 
                    "title": "apple ipod Touch 4ta Generación - 32 Gb - Black", 
                    "price": {
                            "currency": "4.000", 
                            "amount": 1, 
                            "decimals": 2
                    },
                    "picture": "https://http2.mlstatic.com/D_NQ_NP_646936-MLA41617368650_052020-O.webp", 
                    "condition": "used", 
                    "free_shipping": false,
                    "sold_quantity": 0,
                    "description": "Con más poder todos ganan. Gracias al chip A10 Fusion, el iPod touch te ofrece una gran experiencia de juego. La acción es más fluida, los detalles son más nítidos y todo se siente mucho más real. El chip A10 Fusion ofrece un rendimiento hasta dos veces más rápido y gráficos tres veces mejores, sin disminuir la duración de la batería del nuevo iPod touch. Con él puedes disfrutar de juegos y apps de realidad aumentada, y todo se siente más rápido y fluido."
                },
                ] 
            }
        

module.exports = {
    productos
}