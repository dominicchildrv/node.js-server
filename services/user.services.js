const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken')

class UserService{
    static async registerUser(email, password){
        try{
                const createUser = new UserModel({email, password});
                return await createUser.save();
        }catch(err){
            throw err;
        }
    }

    static async checkuser(email){
        try {

            return await UserModel.findOne({email});
            
        } catch (error) {
            throw error;
        }
    }

 static async generateToken(tokenData, secretKey, jwt_expire){
    return jwt.sign(tokenData,secretKey,{expiresIn:jwt_expire});
 }

 static async updateUser(userId, updateData) {
    try {
        const user = await UserModel.findByIdAndUpdate(userId, updateData, { new: true });
        return user; // Returns the updated document
    } catch (error) {
        throw error;
    }
}

static calculateAge(dob) {
    const diff = Date.now() - dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}


 

}

module.exports = UserService;