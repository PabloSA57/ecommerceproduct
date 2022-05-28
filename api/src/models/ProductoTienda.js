const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('productotienda', {
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUID
        },
        stock: {
            type: DataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: DataTypes.STRING,

        },
        /*idproducto:{
            type: DataTypes.INTEGER,
            references: {
                model: Producto, // 'Actors' would also work
                key: 'id'
            }
        },*/
        /*idtienda:{
                type: DataTypes.INTEGER,
                references: {
                    model: Tienda, // 'Actors' would also work
                    key: 'id'
                }
        }*/
    })
}