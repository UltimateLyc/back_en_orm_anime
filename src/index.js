import app from "./app.js"
import { sequelize } from './database/database.js'
import dotenv from 'dotenv'

async function main(){
    try {
        dotenv.config({path: 'src/.env'})
        await sequelize.sync({ force: false }) // Sincroniza el codigo con lo que har en la base de datos // force:true sirve para que no se modifique la tabla ya creada
        await sequelize.authenticate() // Verrifica que nos podamos conectar a la bd
        console.log('Conexion a la base correcta')
        app.listen(process.env.PORT)
        console.log('Server ON')
        console.log(process.env.PORT)
    } catch (error) {
        console.log(error)
    }
}

main()