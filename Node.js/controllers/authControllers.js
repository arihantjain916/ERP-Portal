const user = require("../src/models/registers");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const register = (req,res,next) => {
    bcrypt.hash(req.body.password, 10, function (err, hashedPass)
    {
        if (err) 
        {
            res.send(err);
        }
        try 
        {
            const password = req.body.password;
            const cpassword = req.body.confirmpassword;

            // To check both password is same or not
            if (password === cpassword) 
            {
                const Studemp = new user
                ({
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    username: req.body.username,
                    password: hashedPass,
                    confirmpassword: cpassword,
                    city: req.body.city,
                    state: req.body.state,
                    phonenumber: req.body.phonenumber,
                    email: req.body.email,
                });
                const register = Studemp.save()
                .then(user =>{
                    res.send("User Register Successfully");
                })
                res.status(201), render("index");
            } else {
                res.send("Password do not match!!");
            } 
        }
        catch (error) {
            res.status(400).send(error);
          }
    })
};
module.exports = register;
