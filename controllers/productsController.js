const productsModels = require ("../models/productsModels")


module.exports = {
    getAll: async function(req, res, next) {
        try {
            const productos = await productsModels.find({});
            res.json(productos);
        } catch(e){
            next(e);
        }
    },

    // getByDestacado: async (req, res, next) => {
    //     try {
    //         const outstanding = await productsModels.findOne({outstanding:req.body.outstanding})
    //         if(outstanding == false){
    //         return 
    //     }else{
    //         res.json(outstanding);
    //         return 
    //     } 
    // }
    //     catch(e){
    //      next(e);
    // }
    // },

    getById: async function(req, res, next) { 
       try {
            const producto = await productsModels.findById(req.params.id);
            res.json(producto);
        } catch(e){
            next(e);
        }
    },
    create: async function(req, res, next) {
        try {
            const producto = new productsModels ({
                name:req.body.name,
                sku:req.body.sku,
                description:req.body.description,
                price:req.body.price,
                categoria:req.body.categoria,
                destacado:req.body.destacado
            })
            const prod = await producto.save()
            res.json(prod);
        } catch(e){
            next(e);
        }
    },
    
    update: async function(req, res, next) { 
        try {
             const producto = await productsModels.updateOne({_id: req.params.id}, req.body, {multi:false});
             res.json(producto);
         } catch(e){
             next(e);
         }
     },
     deleteById: async function(req, res, next) {
        try{
            let producto = await productsModel.deleteOne({ _id: req.params.id })
            res.json(producto)
        } catch (e) {
            next(e)
        }
     },
}