import  Sequelize  from 'sequelize'
import dotenv from 'dotenv'

dotenv.config({path: 'src/.env'})
export const sequelize = new Sequelize(
    process.env.DBNAME, //'railway', // Nombre de la base
    process.env.DBUSER,// 'postgres', // Motor de la base
    process.env.DBPASSWORD,// '0MWUdl6L7Gt3HUhTVJsm', // Password
    {
        host:  process.env.DBHOST ,// 'containers-us-west-143.railway.app',
        port:  process.env.DBPORT , // '7461',
        dialect: 'postgres'
    }
)