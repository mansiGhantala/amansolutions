const adminMiddleware = async (req, res, next) => {
    try {
        // console.log(req.user);
        const adminRole = req.user.isAdmin;
        if(!adminRole){
            return res.status(403).json({msg: "Access denied. User is not a admin."});
        }
        // res.status(200).json({msg: req.user.isAdmin});
        // if user is an admin , procced to the nwxt middleware
        next();
        
    } catch (error) {
        next(error); 
    }

};

module.exports = adminMiddleware;