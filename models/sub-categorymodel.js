const mongoose = require("mongoose");
const subcategoryschema = mongoose.Schema({
    category_id:{
        type:String,
        required:true
    },
    sub_category:{
        type:String,
        required:true
    }

 });
 module.exports= mongoose.model("SubCategory",subcategoryschema);