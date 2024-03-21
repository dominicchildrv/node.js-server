const userAtrService = require('../services/user.atr.services');

exports.createUserAtr = async (req, res, next) => {
    try {
        const atrData = req.body; // Use destructuring to extract all fields directly from req.body
        let atrDataCreated = await userAtrService.createUserAtr(atrData);
        res.json({ status: true, success: atrDataCreated });
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
};

exports.getUserAtrList = async (req, res, next) => {
    try {
        const { userId } = req.body;
        let userAtrData = await userAtrService.getUserAtrListSer(userId);
        res.json({ status: true, success: userAtrData });
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
};

exports.deleteUserAtr = async (req, res, next) => {
    try {
        const { id } = req.body;
        let deletedData = await userAtrService.deleteUserAtr(id);
        res.json({ status: true, success: deletedData });
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
};
