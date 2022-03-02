const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    restaurantName : {
        type : String,
        required : true
    },

    restaurantId : {
        type : String,
        required : true
    },

    foodName : {
        type : String,
        required : true
    },

    foodCost : {
        type : Number,
        required : true
    },

    foodType : {
        type : String,
        required : true
    },

    addedAt : {
        type : Date,
        default: Date.now()        
    }

});

module.exports = mongoose.model("Food", foodSchema);