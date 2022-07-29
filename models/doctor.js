const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    username: { type: String, required: true },
    role: { type: String, required: true },
    password: { type: String },
    activeuser: { type: Boolean, required: true, default: true },
    image: { type: String, required: false },
    email: { type: String, required: true }
});

Doctor=mongoose.model('doctor', doctorSchema, 'doctor')
module.exports = Doctor;

