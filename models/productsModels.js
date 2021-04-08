const mongoose = require('../bin/mongodb')

const productShema = new mongoose.Schema({
    name: String,
    sku: String,
    description: String,
    price:Number,
    categoria:String,
    outstanding:Boolean,
})
module.exports = mongoose.model("productosNuevos", productShema)