var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

// Root route
router.get("/", function(req,res){
	res.render("landing");
});

// Show register form
router.get("/register", function(req, res){
	res.render("register");
});

// Sign Up 
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            req.flash("error", err.message);
            return res.redirect("/register");
        }
        passport.authenticate("local")(req, res, function(){
           req.flash("success", "Successfully signed up! Nice to meet you " + req.body.username);
           res.redirect("/campgrounds"); 
        });
    });
});

// Show login form
router.get("/login", function(req, res){
	res.render("login");
});

// Login
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds", 
        failureRedirect: "/login",

failureFlash: true

    }), function(req, res){
});

// Logout
router.get("/logout", function(req, res){
	req.logout();
	req.flash("success", "Logged out");
	res.redirect("/campgrounds");
});

module.exports = router;
