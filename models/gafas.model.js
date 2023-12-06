const {Model, DataTypes} = require('sequelize');

const GAFAS_TABLE = 'gafas';

const gafasSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    forma: {
        type: DataTypes.STRING,
        allowNull: false
    },
    calibre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
};

class gafasModel extends Model {

    static associate(models){
        // this.belongsTo(models.UserModel, {foreignKey: 'user_id'});
    }

    static config(sequelize){
        return {
            sequelize,
            modelName: 'gafas',
            tableName: GAFAS_TABLE,
            timestamps: false
        }
    }

}

module.exports = {gafasModel, gafasSchema, GAFAS_TABLE};