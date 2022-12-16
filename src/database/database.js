import  Sequelize  from 'sequelize'

export const sequelize = new Sequelize(
    'railway', // Nombre de la base
    'postgres', // Motor de la base
    '0MWUdl6L7Gt3HUhTVJsm', // Password
    {
        host: 'containers-us-west-143.railway.app',
        port: '7461',
        dialect: 'postgres'
    }
)