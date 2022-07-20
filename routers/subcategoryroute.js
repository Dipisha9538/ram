
const express = require("express");
const subcategory_route =express();
const bodyparser = require("body-parser");
subcategory_route.use(bodyparser.json());
subcategory_route.use(bodyparser.urlencoded({extended:true}));

const subcategory_controller =require('../controllers/subcategorycontroller');

subcategory_route.post('/addsubcategory',subcategory_controller.addsubcategory);
subcategory_route.get('/getsubcategory',subcategory_controller.getsubcategory);




module.exports = subcategory_route;


 