const Patient = require('../models/patientModel');
const Report = require('../models/reportModel');

exports.register = async (req, res) => {
  try {
    const { name, phoneNumber, age, gender } = req.body;
    let patient = await Patient.findOne({ phoneNumber });

    if (!patient) {
      patient = new Patient({ name, phoneNumber, age, gender });
      await patient.save();
    }

    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createReport = async (req, res) => {
  try {
    const { id } = req.params;
    const { createdBy, status } = req.body;

    const patient = await Patient.findById(id);

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    const report = new Report({ createdBy, status, patient });
    await report.save();

    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllReports = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findById(id).populate('reports').exec();

    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    res.json(patient.reports);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
