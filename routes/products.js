var express = require('express');
var router = express.Router();
var productsController = require("../controllers/productsController")

/* GET users listing. */
router.get('/', productsController.getAll);
router.get('/:id', productsController.getById);
// router.get('/', productsController.getByDestacado);

router.post('/',(req,res,next)=>{req.app.validateUser(req,res,next)}, productsController.create);
router.put('/:id',(req,res,next)=>{req.app.validateUser(req,res,next)}, productsController.update);
router.delete('/:id',(req,res,next)=>{req.app.validateUser(req,res,next)}, productsController.deleteById);

module.exports = router;
