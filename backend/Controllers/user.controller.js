
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {UserModel} = require("../Models/user.model")
const {BlackModel} = require("../Models/blacklist.model")


const registerUser = async(req,res) => {
    const {name,email,password, photo, role} = req.body
    try {
        let arr=password.trim().split("");
        let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let num="0987654321";
        let spec="!@#$%^&*()_-";
        let flagu =false;
        let flagn =false;
        let flags =false;
        for(let i=0; i<arr.length; i++) {
            if(upper.includes(arr[i])) {
                flagu=true;
                break;
            }
        }
        for(let i=0; i<arr.length; i++) {
            if(spec.includes(arr[i])) {
                flags=true;
                break;
            }
        }
        for(let i=0; i<arr.length; i++) {
            if(num.includes(arr[i])) {
                flagn=true;
                break;
            }
        }
        
        const users = await UserModel.find();
        let flag=false;
        if(users.length>0) {
            for(let i=0; i<users.length;i++) {
                if(users[i].email === email) {
                    flag=true;
                    break
                }
            }
        }
        
        if(flag) {
            res.send("Cannot register new user as this email id is already been registered")
        }
        else if(!flagu) {
            res.send("Password should contain atleast one uppercase character")
        }else if(!flagn) {
            res.send("Password should contain atleast one number")
        }else if(!flags) {
            res.send("Password should contain atleast one special character")
        }else if(arr.length < 8) {
            res.send("Password should be 8 characters long")
        }else{
            bcrypt.hash(password, 5, async(err, hash) => {
                // Store hash in your password DB.
                if(err) {
                    res.status(200).send(err)
                }else{
                    let newUser = new UserModel({name,email,photo,role, password:hash});
                    // console.log(newUser)
                    await newUser.save();
                    res.status(200).send({"msg" : "The new user has been registered", "registeredUser" : newUser})
                }
            });
        }

    } catch (error) {
        res.status(400).send({"Error" : error})
    }
}

const loginUser = async(req,res) => {
    const {email,password} = req.body;
    try {
        let user = await UserModel.findOne({ email });
        // console.log(user._id)
        bcrypt.compare(password, user.password, (err, result)=> {
            // result == true
            if(err) {
                res.status(200).send({"Error" : err})
            }else{
                res.status(200).send({"msg" : "Login successful!", "token" : jwt.sign({userID:user._id}, process.env.SECRET_KEY ),role:user.role})
            }
        });
    } catch (error) {
        res.status(400).send({"error" : error.message})
    }
    
}

const logoutUser = async(req,res) => {
    let token = req.headers.authorization?.split(" ")[1];
    try {
        let blacklist = new BlackModel({token});
        await blacklist.save();
        res.status(200).send({"msg" : "User has been logged out"})
    } catch (error) {
        res.status(400).send({"error" : error})
    }
}

module.exports = {
    logoutUser,loginUser,registerUser
}