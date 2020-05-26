const Product = require('../../db').Product

const route = require('express').Router()

route.get('/', (req, res) => {
    //Get all products
    Product.findAll()
        .then((products) => {
            res.status(200).send(products)
        })
        .catch((error) => {
            res.status(500).send({
                error: "Could not retrive products"
            })
        })
})

route.post('/', (req, res) => {
    //we need to validate the values
    if(isNaN(req.body.price)){
        return res.status(403).send({
            error: "Price is not a valid number"
        })
    }
    //add a new products
    Product.create({
        name :req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price)
    })
    .then((product) => {
        res.status(201).send(product)
    })
    .catch((err) => {
        res.status(501).send({
            error: "Error adding product"
        })
    })
})

exports = module.exports = route