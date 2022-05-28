const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
        sequelize.define('producto', {
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUID
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}