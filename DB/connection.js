import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize('freedb_blogs_user', 'freedb_Fatima', 'DrBn!9ywqqcxVE3', {
    host: 'sql.freedb.tech',
    port:3306,
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