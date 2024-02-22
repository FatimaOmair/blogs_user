import { connectDB } from '../../DB/connection.js'
import authRouter from'./auth/auth.router.js'
import blogRouter from './blog/blog.router.js'
import userRouter from './user/user.router.js'
import cors from 'cors';
export const initApp=(app,express)=>{

    connectDB();
    app.use(cors());
    app.use(express.json());
    app.get('/',(req,res)=>{
        return res.json({message:"home page"})
    })
    app.use("/user",userRouter)
    app.use("/blog",blogRouter)
    app.use("/auth",authRouter)
    app.use('*',(req,res)=>{
        return res.json({message:"page not found"})
    })
}