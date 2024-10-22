const mongoose = require('mongoose');

// Define User schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: Number
});

// Export the User model
module.exports = mongoose.model('User', UserSchema);
