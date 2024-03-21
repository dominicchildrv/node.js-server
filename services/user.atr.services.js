const userAtrModel = require("../models/user.atr.model");

class userAtrService {
    static async createUserAtr(atrData) {
        const createUserAtr = new userAtrModel(atrData);
        return await createUserAtr.save();
    }

    static async getUserAtrListSer(userId) {
        const userAtrList = await userAtrModel.find({ userId });
        return userAtrList;
    }

    static async deleteUserAtr(id) {
        const deleted = await userAtrModel.findByIdAndDelete({ _id: id });
        return deleted;
    }
}

module.exports = userAtrService;
