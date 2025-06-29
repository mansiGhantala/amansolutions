const User = require("../models/user-model")
const Contact = require("../models/contact-model")
// get all users logic
 const getAllUsers =  async(req, res ,next) => {
    try {
        const users = await User.find({},{password: 0});
        console.log(users);
        
        if(!users || users === 0){
            res.status(404).json({message: "No Users Found "});
        }

        return res.status(200).json(users)
    } catch (error) {
        next(error);
    }
 };

 const getUserById = async(req, res, next) => {
try {
    const id = req.params.id;
    const data = await User.findOne({_id: id},{password: 0}); 
    return res.status(200).json(data);
} catch (error) {
   next(error);
}
 };

 const updateUserById = async(req, res, next) => {
try {
    const id = req.params.id;
    const updatedUserData = req.body;
    const updatedData = await User.updateOne({_id: id},{$set: updatedUserData,});
    return res.status(200).json(updatedData);
} catch (error) {
   next(error);
}
 };

 const deleteUserById = async(req, res, next) => {
try {
    const id = req.params.id;
    await User.deleteOne({_id: id}); 
    return res.status(200).json({message: "User Deleted Successfully"});
} catch (error) {
   next(error);
}
 };

// get all contacts logic 
 const getAllContacts   =  async(req, res ,next) => {
    try {
        const contacts = await Contact.find();
        console.log(contacts);
        
        if(!contacts || contacts === 0){
            res.status(404).json({message: "No Users Found "});
        }

        return res.status(200).json(contacts)
    } catch (error) {
        next(error);
    }
 };

 
  const deleteContactsById = async(req, res, next) => {
try {
    const id = req.params.id;
    await Contact.deleteOne({_id: id}); 
    return res.status(200).json({message: "Contact Deleted Successfully"});
} catch (error) {
   next(error);
}
 };
 module.exports = {getAllUsers ,getUserById,updateUserById,deleteUserById, getAllContacts,deleteContactsById};