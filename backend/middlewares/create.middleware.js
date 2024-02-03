const jwt = require("jsonwebtoken");
const { BlackModel } = require('../Models/blacklist.model.js');
const { UserModel } = require("../Models/user.model.js");

const checkCreatorRole = async(req, res, next) => {
      const token = req.headers.authorization?.split(" ")[1]
      try {
          const blacklistedToken = await BlackModel.findOne({token});
          if(blacklistedToken) {
              res.status(200).send({"msg" : "Please login again"})
          }else{
              jwt.verify(token, process.env.SECRET_KEY , async(err, decoded) => {
                  if(err) {
                      res.status(200).send({"msg" : "Not authorised"})
                  }else{
                      req.body.userID = decoded.userID;
                      let user = await UserModel.findOne({_id: decoded.userID});
                      // console.log(user)
                      if(user && user.role == "CREATOR") {
                        next()
                      }else{
                        res.status(200).send({"message": "user role is not creator"})
                      }
                  }
                });
          }
      } catch (error) {
          res.status(400).send({"Error" : error})
      }    
};

module.exports = {
  checkCreatorRole
}