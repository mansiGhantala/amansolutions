const Service = require("../models/service-model");

const services = async (req , res ) => {
    try {
        const response= await Service.find();
        if(!response) {
            // handle the case where no document was found
             res.status(404).json({ message: "No services found" });
        return ;
        }
        res.status(200).json({msg: response});
    } catch (error) {
        console.log(`services: ${error}` );
    }
};

module.exports = services;