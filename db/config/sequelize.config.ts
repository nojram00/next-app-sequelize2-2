import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'next_sequelize_db',
    dialectModule: require('mysql2') //very required sa next js
})

sequelize.sync().then(() => {
    console.log("Connection Success");
}).catch(e => {
    console.error("Connection failed. ", e)
})

export default sequelize
