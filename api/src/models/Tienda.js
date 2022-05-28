const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('tienda', {
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUID
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ubicacion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imgurl: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
}