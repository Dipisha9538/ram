// const express =require('express');
// const auth =require('../Auth/auth')
// const { error } = require('console');
// const { addcategory, getcategories,getsubcategories} = require('../controllers/categorycontroller');
// const router = express.Router();



// router.post('/category/create',addcategory);
// router.get('/category/getcategory',getcategories);
// router.get('/category/getcategory/subcategory',getsubcategories);

// // router.get('/category/getcategory/subcategory', async (req,res)=>{
// //     const category = await category.findById(req.params.id);
// //     // console.log(id);
// //     if(!category){
// //       res.status(404).json({
// //         success: false,
// //       });
// //     } else{
// //       res.status(201).json({
// //         success: true,
// //         data: category,
// //       });
// //     }
// //   });
// module.exports=router;
const express = require("express");
const category_route =express();
const bodyparser = require("body-parser");
category_route.use(bodyparser.json());
category_route.use(bodyparser.urlencoded({extended:true}));

const category_controller =require('../controllers/categorycontroller');

category_route.post('/addcategory',category_controller.addcategory);
category_route.get('/category/getcategory',category_controller.getcategory);




module.exports = category_route;


 