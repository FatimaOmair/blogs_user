import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize('blog_user', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

export const connectDB=async()=>{
try{
   return await sequelize.sync({alter:false});

}
catch(err){
 console.log("error to connect to database") ;  
}
}