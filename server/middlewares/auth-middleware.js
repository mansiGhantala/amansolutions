// const jwt = require("jsonwebtoken");
// const User = require("../models/user-model");

// const authMiddleware = async(req , res , next) =>{
//  const token = req.header("Authorization");

//  if(!token) {
//     // if you attempt to use an expried token , you'll receive a "401 Unauthorized HTTp response.
//     return res.status(401).json({message: "Unauthorized HTTP , Token not provided"});
//  }
// //  console.log('token form auth middleware', token);
 
// //  Assuming token is in the format "Bearer <jwtToken> , Removing the Bearer" prefix"
//   const jwtToken = token.replace("Bearer","").trim();
//  console.log('token form auth middleware', jwtToken);

//  try {
//     const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRECT_KEY);
//     // console.log(isVerified);

//     const userData = await User.findOne({ email: isVerified.email }).select({ password: 0, });
//     console.log(userData);

//     req.user = userData;
//     req.token = token;
//     req.userId = userData._id;
    
// next(); 
//  } catch (error) {
//     return res.status(401).json({message: "Unauthorized. Invalid Token."});
    
//  }
// };

// module.exports = authMiddleware;


const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized HTTP, Token not provided" });
  }

  const jwtToken = token.replace("Bearer", "").trim();
  console.log("Token from auth middleware:", jwtToken);

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRECT_KEY);

    // ✅ Use userId instead of email for secure and efficient lookup
    const userData = await User.findById(isVerified.userId).select("-password");

    if (!userData) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = userData;
    req.token = token;
    req.userId = userData._id;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized. Invalid Token." });
  }
};

module.exports = authMiddleware;
