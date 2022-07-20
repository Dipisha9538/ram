// const mongoose = require('mongoose');
// const category= new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//         trim:true

//     },
//     slug:{
//         type:String,
//         unique:true
//     },
//     category_id:{
//         type:String

//     },
//     parentid:{
//         type:String
//     },
// },
//        {timestamps:true});
// module.exports=mongoose.model('Category',category);
const mongoose = require("mongoose");
 const categoryschema = mongoose.Schema({
    category:{
        type:String,
        required:true
    }

 });
 module.exports= mongoose.model("Category",categoryschema);