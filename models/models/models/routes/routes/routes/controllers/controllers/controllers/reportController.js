const Report = require('../models/reportModel');

exports.getReportsByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    const reports = await Report.find({ status });

    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
