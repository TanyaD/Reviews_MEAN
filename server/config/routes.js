var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant');
var restaurants = require('../controllers/restaurants.js');

module.exports = function(app){
//restaurants
    app.get('/', function(req, res) {
        res.json({ message: 'welcome to our api!' });   
    }),
    app.get('/restaurants',function(request,response){
        restaurants.allRestaurants(request,response)
    }),
    app.post('/new', function(req, res){
       restaurants.addRestaurant(req,res)
    }),
    app.get('/restaurants/:id', function(req,res){
        restaurants.getRestaurant(req,res)
    }),
    app.delete('/restaurants/:id', function(req,res){
        restaurants.deleteRestaurant(req,res)}),
    app.put('/edit', function(req,res){
        restaurants.updateRestaurant(req,res)
    }),

    app.patch('/restaurants/:id', function(req, res){
        restaurants.pushReview(req,res)
    })

}



//reviews
    // app.post('/write/:id', function(req, res){
    //     reviews.addReview(req,res)
    // }),
    // app.get('/reviews/:id', function(req,res){
    //     reviews.getReviews(req,res)
    // })