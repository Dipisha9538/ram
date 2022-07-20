// const product= require('../models/postaddmodel')
// const multer= require('multer');
// const shortid = require('shortid');
// require('../controllers/categorycontroller');
// require('../models/postaddmodel')


// exports.createproduct=(req,res)=>{
//     const {productname,category_id,price,description,created_by
        
//     }=req.body;
//    let product_image=[];
    
    
//     if (req.files.length > 0){
//         product_image=req.files.map(file=>{
//             return {img:file.filename}
//         });
//     }
//     const data = new product({
//         productname:productname,
//         product_image:product_image,
//         // product_quantity:product_quantity,
//         // productcategory:productcategory,
//         price:price,
//         description:description,
//         category_id,
//         created_by:req.userid
//     });
//     data.save(((error,product)=>{
//         if (error) return res.status(400).json({error});
//         if (product){
//             res.status(201).json({product});
//         }
//     }));

//     // res.status(200).json({file:req.file,body:req.body});


// };
// module.exports.getProducts = (req, res) => {
//     product.find().sort()
//       .then((products) => {
//         res.status(200).json(products);
//       });
  
//   }
  
  
//   module.exports.product_details = (req, res) => {
//     module.exports.id = req.params.id;
//     product.findById(id)
//       .then(result => {
//         res.status(200).json(result);
//       })
//       .catch(err => {
//         res.status(400).json('something went wrong');
//       });



//       module.exports.getproduct = async  (req, res) => {
//         // localhost:3000/api/v1/products?categories=1234,345
//         let categories = {};
//         if (req.query.categories) {
//           categories = { category: req.query.categories.split(",") };
//         }
      
//         const productList = await product.find(categories).populate("category");
      
//         if (!productList) {
//           res.status(500).json({ success: false });
//         } else {
//           res.status(201).json({ success: true, data: productList });
//         }
//       };
      
// //   }
// //   module.exports.getproduct = async(req,res)=>{
// //     try{
// //         var send_data=[];
// //         var categorii_data= await category_controller.getcategories();
// //         console.log(categorii_data);
// //         if(categorii_data.length>0){
// //             for (let i=0; i<categorii_data.length; i++){
// //                 var product_data =[];
// //                 cat_id = categorii_data[i]['_id'].toString();
// //                 var cat_product= await product.find({category_id:cat_id});
// //                 if (cat_product.length>0){
// //                     for (let j=0; j<cat_product.length;j++){
// //                         product_data.push(
// //                             {
// //                                 "product_name":cat_product[j]['productname'],
// //                                 "images":cat_product[j]['images']

// //                             }
// //                         );
// //                     }
// //                 }
// //                 send_data.push({
// //                     "category":categorii_data[i]['name'],
// //                     "product":product_data
// //                 });
                

// //             }
// //             res.status(200).send({success:true, msg:'product details',data:send_data});
             
// //         }
// //         else{
// //             res.status(200).send({sucess:false,msg:"product details",data:send_data});

// //         }

        


// //     }catch(error){
// //         res.status(400).send({sucess:false,msg:error.message});

// //     }
// //   }
//     }


// // module.exports = product;
// const Product = require("../models/postaddmodel");
const Product = require("../models/postaddmodel");
const Category = require("../models/postaddmodel");
const category_controller =require("../controllers/categorycontroller");
subcategory_controller = require("../controllers/subcategorycontroller");
const addproduct = async(req,res)=>{
    try{
        var arrimages=[];
        for(let i =0 ; i<req.files.length;i++){
            arrimages[i]= req.files[i].filename;

        }
        var product = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category_id: req.body.category_id,
            sub_category_id: req.body.sub_category_id,
            images:arrimages,




        });
       const product_data = await product.save();
       res.status(200).send({sucess:true,msg:"product details",data:product_data});


    }catch(error){
        res.status(400).send({sucess:false,msg:error.message})
    }

}

// const getproduct = async(req,res)=>{
//         try{
//             var send_data=[];
//             var categorii_data= await category_controller.getcategory();
//             // console.log(send_data);
//             if(categorii_data.length>0){
//                 for (let i=0; i<categorii_data.length; i++){
//                     var product_data =[];
//                     cat_id = categorii_data[i]['_id'].toString();
//                     var cat_product= await Product.find({category_id:cat_id});
//                     if (cat_product.length>0){
//                         for (let j=0; j<cat_product.length;j++){
//                             var subcategory_data = await subcategory_controller.get_sub(cat_product[j]['sub_category_id'])
//                             product_data.push(
//                                 {
//                                     "product_name":cat_product[j]['name'],
//                                     "images":cat_product[j]['images'],
//                                     "subcategory":subcategory_data[j]['sub_category']
    
//                                 }
//                             );
//                         }
//                     }
//                     send_data.push({
//                         "category":categorii_data[i]['name'],
//                         "product":product_data
//                     });
                    
    
//                 }
//                 res.status(200).send({success:true, msg:'product details',data:send_data});
                 
//             }
//             else{
//                 res.status(200).send({sucess:false,msg:"product details",data:send_data});
    
//             }
    
            
    
    
//         }catch(error){
//             res.status(400).send({sucess:false,msg:error.message});
    
//         }
//       }


const getproduct = async (req, res) => {
    // localhost:3000/api/v1/products?categories=1234,345
    const productList = await Product.find({});
    if (!productList) {
      res.status(500).json({
        success: false,
      });
    } else {
      res.status(201).json({
        success: true,
        data: productList,
      });
    }
  };
        
module.exports={
    addproduct,
    getproduct
}