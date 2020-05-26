const Sequelize = require('sequelize')

const DataTypes = Sequelize.DataTypes

const db = new Sequelize('shopdb', 'shopper', 'shoppass', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min:0,
        max:5,
    }
})

const User = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false,
    }
})
const Product = db.define('products', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    manufacturer: DataTypes.STRING,
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
})

db.sync()
    .then(() => console.log("DataBase has been synced"))
    .catch((err) => console.log("Error creating database"))

exports = module.exports = {
    User, Product
}

