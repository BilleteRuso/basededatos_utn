var mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost/ecomerce', {useNewUrlParser: true}, function (error) {
    if (error) {
        throw error;
    } else {
        console.log('Contectado a MongoDB');
    }
});
module.exports = mongoose;