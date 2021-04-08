const mongoose = require("../bin/mongodb")
const validators = require("../util/validators")
const errorMessage = require("../util/errorMessage")
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true, 
    },
    email:{
        type: String,
        required: [true, errorMessage.GENERAL.campo_obligatorio],
        validate:{
            validator: function(v){
                return validators.emailValidate(v)
            },
            message: errorMessage.USERWEB.emailIncorret
        },
    },
    password:{
        type: String,
        required: [true, errorMessage.GENERAL.campo_obligatorio],
        validate:{
            validator: function(v){
                return validators.isGoodPassword(v)
            },
            message: errorMessage.USERWEB.passwordIncorrect
        },
    }
});
//--------------------------------------------------
//esto es para encriptar la contraseña ... muy bueno!!
userSchema.pre("save", function(next){
    this.password = bcrypt.hashSync(this.password,10);
    next();
})
//--------------------------------------------------
userSchema.statics.findByIdAndValidate = async function (id){
    const document = await this.findById(id);
    if(!document){
        return{
            error:true,
            message:"No existe usuario"
        }
    }
    return document;
}
module.exports=mongoose.model("users", userSchema)