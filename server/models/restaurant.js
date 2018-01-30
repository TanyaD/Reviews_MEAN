var mongoose = require('mongoose');
var Schema=mongoose.Schema
var RestaurantSchema = new mongoose.Schema({
    name: {type: String, required:[true, "A restaurant must have a name"],
    minlength:[3, "Restaurant's name must be at least 1 charachters long"]},
    cuisine: {type: String, required:[true, "A cuisine must have a name"],
    minlength:[4, "Cuisine's name must be at least 4 charachters long"]},
    reviews: [{
        author: {type: String, required:true, minlength:1},
        content: {type: String, required:true, minlength:1},
        stars: {type: Number, default:0},
    }]
}, {timestamp: true})
var Restaurant=mongoose.model('Restaurant', RestaurantSchema);


