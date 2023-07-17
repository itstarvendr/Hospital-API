const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
});

module.exports = mongoose.model('Patient', patientSchema);
