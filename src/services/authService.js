const {UserSchema, UserModel} = require('./../models/userModel');

const getAuthUser = async (data) => {
    const user = await UserModel.findOne({email: data.email});
    return user;
}

module.exports= {
    getAuthUser
}
