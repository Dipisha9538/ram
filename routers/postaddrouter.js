// const express =require('express');
// const auth =require('../Auth/auth')
// const { error } = require('console');
// // const { addcategory, getcategories } = require('../controllers/categorycontroller');
// const router = express.Router();
// const multer= require('multer');

// const product =require('../models/postaddmodel');
// const path = require('path');
// const { createproduct ,getproduct} = require('../controllers/productcontroller');
// const shortid = require('shortid')

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null,path.join( path.dirname(__dirname),'upload'))
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null,shortid.generate() + '-' + file.originalname )
//     }
//   })
//   const upload= multer({storage});




// router.post('/product/create',upload.array('product_image'),createproduct);
// router.get('/getproduct',getproduct);
// // router.get('/category/getcategory',getcategories);
// module.exports=router;


const express = require("express");
const product_route =express();
const bodyparser = require("body-parser");
product_route.use(bodyparser.json());
product_route.use(bodyparser.urlencoded({extended:true}));

const multer = require("multer");
const path = require("path");
// const storage = multer.diskStorage({
//     destination.function
// })

const product_controller =require('../controllers/productcontroller');
product_route.use(express.static('upload'))


const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null,path.join(__dirname,'../upload'),function(err,sucess){
            if (err){
                throw err
            }

          });
        },
        filename: function (req, file, cb) {
          const name = Date.now() + '-' + file.originalname;
          cb(null,name,function(error, success){
            if (error){
                throw error

            }

          });
        }
      });
      const upload= multer({storage:storage});


product_route.post('/addproduct',upload.array('images'),product_controller.addproduct);
product_route.get('/getproduct',product_controller.getproduct);


module.exports= product_route;