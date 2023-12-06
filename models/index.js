const {gafasModel, gafasSchema} = require('./gafas.model');
const {UserModel, userSchema} = require('./user.model');

function setUpModels(sequelize){
    gafasModel.init(gafasSchema, gafasModel.config(sequelize));
    UserModel.init(userSchema, UserModel.config(sequelize));
}

module.exports = setUpModels;