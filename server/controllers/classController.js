const expressAsyncHandler = require("express-async-handler");
const Class = require("../models/ClassModel");

exports.addClass = expressAsyncHandler(async (req, res) => {    
    const {user_type} = req.user;  

    if(user_type === "admin") {
        const addClass = await new Class(req.body).save();
    }
})

exports.getClasses = expressAsyncHandler(async (req, res) => {

})