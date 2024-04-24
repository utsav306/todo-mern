const mongoose = require("mongoose");

const conn = async (req, res) => {
    try {
        await mongoose.connect("mongodb+srv://todominato:todominato@todo.cgd6jbr.mongodb.net/");
        console.log("database connected");
    } catch (error) {
        // Since 'res' is not available here, you might want to throw the error or handle it differently.
        console.error("Database connection error:", error);
    }
};



conn();