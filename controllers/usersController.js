const usersModels = require("../models/usersModels");
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

module.exports = {

    create: async function (req, res, next) {
        try {
            console.log(req.body);
            const user = new usersModels({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            })
            const document = await user.save();
            res.json(document);
        }catch(e){
            next(e)
        }      
    },
    getAll: async (req, res, next) => {
        console.log(req.query)
        const document = await usersModels.find({});
        res.json(document);
    },
    login: async (req, res, next) => {
        try {
        const user = await usersModels.findOne({email:req.body.email})
        if(!user){
            res.json({error:true, message:"email incorrecto"})
            return
        }
        if(bcrypt.compareSync(req.body.password,user.password)){
            // const token = jwt.sign({userId:user._id},req.app.get("secretKey"), {expiresIn:"0"})
            res.json({error:false, message:"bienvenido"/*,token:token*/})
            return
        }else{
            res.json({error:true, message:"contraseña incorrecta"})
            return
        } 
    }catch(e){
        next(e)
    }
}
}