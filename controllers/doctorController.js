const Doctor = require('../models/doctorModel');
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.register = async (req, res) => {
  try {
    const { username, password, name, specialization } = req.body;
    const doctor = new Doctor({ username, password, name, specialization });
    await doctor.save();
    res.status(201).json({ message: 'Doctor registered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const doctor = await Doctor.findOne({ username });

    if (!doctor || doctor.password !== password) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const token = jwt.sign({ doctorId: doctor._id }, config.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
