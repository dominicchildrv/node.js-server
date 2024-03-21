const db = require('../config/db');
const UserModel = require("./user.model");
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userAtrSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: UserModel.modelName
    },
    feeling: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
    moment: {
        type: Date,
        default: Date.now // Automatically set to the current timestamp
    },
    standardMedicationIntake: {
        type: Boolean,
        required: false
    },
    momentOfMedicationIntake: {
        type: String, // Consider using Date if you want to store the exact time
        required: false // Assuming this is optional based on standardMedicationIntake
    },
    didYouTakeExtra: {
        type: Boolean,
        required: false
    },
    howMuch: {
        type: Number, // Assuming this refers to the number of tablets
        required: false // Assuming this is optional based on didYouTakeExtra
    },
    weight: {
        type: Number,
        required: true
    },
    generalFitnessToday: {
        type: Number,
        required: false,
        min: 0,
        max: 10
    },
    shortOfBreath: {
        type: Boolean,
        required: false
    },
    feelingOfRetainingFluid: {
        type: Boolean,
        required: false
    },
    sleepTime: {
        type: Number, // Assuming this refers to hours of sleep
        required: false
    }
}, { timestamps: true });

const userAtrModel = db.model('userAtr', userAtrSchema);
module.exports = userAtrModel;
