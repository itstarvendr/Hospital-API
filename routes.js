const express = require('express');
const router = express.Router();
const doctorController = require('./controllers/doctorController');
const patientController = require('./controllers/patientController');
const reportController = require('./controllers/reportController');
const authMiddleware = require('./middlewares/authMiddleware');

// Doctor routes
router.post('/doctors/register', doctorController.register);
router.post('/doctors/login', doctorController.login);

// Patient routes
router.post('/patients/register', authMiddleware, patientController.register);
router.post('/patients/:id/create_report', authMiddleware, patientController.createReport);
router.get('/patients/:id/all_reports', authMiddleware, patientController.getAllReports);

// Report routes
router.get('/reports/:status', authMiddleware, reportController.getReportsByStatus);

module.exports = router;
