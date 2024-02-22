import userModel from "../../../DB/model/user.model.js";

export const getAuth=(req,res)=>{
    return res.json({message:"Auth"})
}

export const register=async(req,res)=>{
    try{
     const {name,email,password,age}=req.body;
    const user =await userModel.create({name:name,email:email,password:password,age});
    return res.json({message:"success",user})
    }catch(err){
       

     if(err.original?.errno==1062){
        return res.json({message:"email already exist"})
     }
     return res.json({message:"error",err:err.stack})
    }
}

export const login=async(req, res)=>{
    try{
        const{email,password}=req.body;
        const user=await userModel.findOne({
            attributes:["id", "name"],
            where: {email:email,password:password}
        })
        if(!user){
            return res.json({message:"email or password is wrong"})
        }
    return res.json({message:"success",user})
    }catch(err){
        return res.json({message:"error",err:err.stack})    
    }
}

