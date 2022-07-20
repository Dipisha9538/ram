// const mongoose = require("mongoose");
// const product = new mongoose.Schema({
//     productname : {
//         type : String,
//         // required : true
//     },
   

//     price : {
//         type : String,
//         // required : true
//     },

//      description: {
//         type : String,
//         // required : true
//     },

//     product_image :[ 
//        {img:{type : String },} 
//     ],

  
//     created_by:{
//        type: mongoose.Schema.Types.ObjectId,
//        ref:'Customer'
//     },
//     category_id:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:'category'
//     },
    
//     updatedAt:Date,


// },{timestamps:true});

// module.exports = mongoose.model('product', product);
var mongoose = require("mongoose");
const productschema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
   

    price : {
        type : String,
        required : true
    },

     description: {
        type : String,
        required : true
    },
    category_id:{
        type : String,
        required : true

    },
    sub_category_id:{
        type : String,
        required : true

    },
    images:{
        type:Array,
        required:true
    }

});
module.exports= mongoose.model("Product",productschema)