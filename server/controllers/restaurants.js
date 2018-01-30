var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant');
//var Review = mongoose.model('Review');
module.exports = {
//restaurant 
    getRestaurant: function(req,res){
        Restaurant.find({_id:req.params.id},function(err,restaurant){      
            console.log(restaurant)
            if(err){
                res.json({message:"error", error:error})
            }
            res.json({message:"Success",restaurant:restaurant[0]})
            })
        },
    allRestaurants: function(req,res){
        Restaurant.find({}).exec(function(err,restaurants){
        if(err){
            res.json({message:"error", error:error})
        }
        else{
            res.json({message:"Success",restaurants:restaurants})
        }
        })
    },
    addRestaurant: function(req, res){
        console.log("POST DATA", req.body);
        var restaurant=new Restaurant(req.body);
        restaurant.save(function(error, Restaurant){
            if(error){
                res.json({message: "Error", error: error})
            }
            else{
                res.json({message: "Success", data: Restaurant})
            }
        })
    },
    deleteRestaurant: function(req,res){
        
        Restaurant.remove({_id:req.params.id},function(err,restaurant){       
            console.log(restaurant)
            res.json(restaurant)
        })
    },
    updateRestaurant: function(req,res){
        
        Restaurant.update({_id:req.body._id},req.body,{runValidators:true},function(error,restaurant){
            if(error){
                res.json({message: "Error", error: error})
            }
            else{
            console.log(restaurant)
            res.json({message:"Success",restaurant:restaurant})
            }
            })
    },
    pushReview: function(req,res){
        Restaurant.findOneAndUpdate({_id:req.params.id},{runValidators:true},{$push:{reviews: req.body}}, 
            function(error, data){
            if(error){
                res.json({message: "Error", error: error})
            }
            else{
                res.json({message: "Success", review: data})
            }
        }
        
        )}
}