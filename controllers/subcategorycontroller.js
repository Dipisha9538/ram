
const SubCategory = require('../models/sub-categorymodel')
const addsubcategory = async(req,res)=>{
    try{
        const check_sub = await SubCategory.find({category_id:req.body.category_id});
        if (await check_sub.length > 0){
            let check = false;
            for (let i = 0; i<check_sub.length;i++){
                if(check_sub[i]['sub-category']===req.body.sub_category);
                check = true;
                break;

            }
            if(check===false){
                const subCategory = new SubCategory({
                    category_id:req.body.category_id,
                    sub_category:req.body.sub_category
                });
                const sub_cat_data = await subCategory.save();
                res.status(200).send({sucess:true,msg:"Sub-category details",data:sub_cat_data}); 

            }
            else{
                res.status(200).send({sucess:true,msg:"this Sub-category ("+req.body.sub_category+")is already exits"}); 

            }
        }
        else{
            const subCategory = new SubCategory({
                category_id:req.body.category_id,
                sub_category:req.body.sub_category
            });
            const sub_cat_data = await subCategory.save();
            res.status(200).send({sucess:true,msg:"Sub-category details",data:sub_cat_data}); 

        }
        
       

    }
    catch(error){
        res.status(400).send({sucess:false,msg:error.message});
    }

}

const getsubcategory = async (req, res) => {
    const subcategoryList = await SubCategory.find({});
    if (!subcategoryList) {
      res.status(500).json({
        success: false,
      });
    } else {
      res.status(201).json({
        success: true,
        data: subcategoryList,
      });
    }
  };

module.exports ={
    addsubcategory,
    getsubcategory
}