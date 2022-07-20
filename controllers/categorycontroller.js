// const { error } = require('console');
// const slugify= require('slugify');
// const Category =require('../models/categorymodel');

// function createCategories(categories,parentid=null){
//     // const categoryList =[];
//     // let category;
//     // if(parentid=null){
//     //    category= categories.filter(cat=>cat.parentid==undefined);
//     // }else{
//     //     category=categories.filter(cat=>cat.parentid==parentid);po
//     // }
//     // for (let cate of category){
//     //     categoryList.push({
//     //         _id:cate._id,
//     //         name:cate.name,
//     //         slug:cate.slug,
//     //         children:createCategories(categories,cate._id)
//     //     });
        
//     // }
//     return categories;
// };

// function createsubCategories(categories){
//     // const categoryList =[];
//     // let category;
//     // if(parentid=null){
//     //    category= categories.filter(cat=>cat.parentid==undefined);
//     // }else{
//     //     category=categories.filter(cat=>cat.parentid==parentid);po
//     // }
//     // for (let cate of category){
//     //     categoryList.push({
//     //         _id:cate._id,
//     //         name:cate.name,
//     //         slug:cate.slug,
//     //         children:createCategories(categories,cate._id)
//     //     });
        
//     // }
//     return categories;
// };

// exports.addcategory = (req,res)=>{
//     const categoryobj={
//         name:req.body.name,
//         slug:slugify(req.body.name)

//     }
//     if(req.body.parentid){

//         categoryobj.parentid=req.body.parentid;
//     }
//     const cat =new Category(categoryobj);
//     cat.save((error,category) =>{
//         if(error) return res.status(400).json({error});
//         if (category){
//             return res.status(201).json({category});
//         }

//     });
// }
// exports.getcategories =(req,res)=>{
//     Category.find({})
//     .exec((error,categories)=>{
//         if(error) return res.status(400).json({error});
//         if (categories){
        
//             const categoryList = createCategories(categories);

//              res.status(200).json({categoryList});
//         }

//     });
//     // return categorylist;

// }
// exports.getsubcategories =(req,res)=>{
//     const parentid = req.query.parentid;
//     // console.log(paa)
//     Category.find({parentid:parentid})
//     .exec((error,categories)=>{
//         if(error) return res.status(400).json({error});
//         if (categories){
        
//             const categoryList = createsubCategories(categories);
//             // console.log(categoryList)
//              res.status(200).json({categoryList});
//         }

//     });
//     // console.log(Category.find({}))
//     // return categorylist;

// }
const Category = require("../models/categorymodel")
const addcategory = async (req,res)=>{
    try{
        const category_data = await Category.find();
        if (await category_data.length > 0){
            let check = false;
            for (let i = 0; i<(await category_data).length;i++){
                if(category_data[i]['category']===req.body.category);
                check = true;
                break;

            }
            if (check==false){      
       const category = new Category ({
        category:req.body.category
    });
    const cat_data= await category.save();
    res.status(200).send({sucess:true,msg:"category data",data:cat_data});

            }
            else{
                res.status(200).send({sucess:true,msg:"This category("+req.body.category+")is already exits"});


            }

        }
        
        else{
       const category = new Category ({
            category:req.body.category
        });
        const cat_data= await category.save();
        res.status(200).send({sucess:true,msg:"category data",data:cat_data});

    }
}
    catch(error){
        res.status(400).send({sucess:false,msg:error.message});
    }
}


const getcategory = async (req, res) => {
    const categoryList = await Category.find({});
    if (!categoryList) {
      res.status(500).json({
        success: false,
      });
    } else {
      res.status(201).json({
        success: true,
        data: categoryList,
      });
    }
  };
module.exports = {
    addcategory,
    getcategory
}