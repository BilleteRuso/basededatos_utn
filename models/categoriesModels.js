const mongoose = requiere("../bin/mongodb");

const categorySchema = new mongoose.Schema({
    name: String
});
categorySchema.statics.findByIdAndValidate = async function (id){
    const document = await this.findById(id);
    if(!document){
        return{
            error:true,
            message:"No existe categoría"
        }
    }
    return document;
}
module.export = mongoose.model("users", categorySchema)