import { Op } from "sequelize";
import blogModel from "../../../DB/model/blog.model.js";
import userModel from "../../../DB/model/user.model.js"

export const getUser= async(req,res)=>{

    try{
        const users=await userModel.findAll({
            include:blogModel,
            // where:{age:{[Op.gte]:25}}
        });
    return res.json({message:"success",users:users})
    }catch(err){
        return res.json({message:"error",err:err}) ; 
    }
}


export const destroy=async(req,res) => {
    try{
      const{id}=req.params;
      const user=await userModel.destroy({
          where:{
              id
          }
      })
      if(!user){
          return res.json({message:"user not found"});
      }
      return res.json({message:"success",user});
    }catch(err){
      return res.json({message:"error", err})
    }
  }
  
  
  export const update=async(req, res) => {
     try{
      const{id}=req.params;
      const {name,email}=req.body;
      const user=await userModel.update({name,email},{where:{id}})
      if(!user){
          return res.json({message:"user not found"})   
      }
      return res.json({message:"success",user});
     }catch(err){
      return res.json({message:"error",err})
     }
  }