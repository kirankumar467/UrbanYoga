const express = require('express');
const businessOverviewRouter = express.Router();
const businessOverview = require('../models/businessOverviewModel');
const businessOverviewData = require('../businessoverviewdata/data');

const router = () => {
  businessOverviewRouter.get('/details', (req, res) => {
    const fetchRecords = async () => {
      try {
        const result = await businessOverview.find({});
        res.status('200').json(result);
      } catch (error) {
        const errorResponse = { status: 500, message: `Unable to fetch records`, data: `${error}` }
        res.status('500').json(errorResponse);
      }
    }

    fetchRecords();
  });

  businessOverviewRouter.post('/create', (req, res) => {
    const insertRecords = async () => {
      try {
        await businessOverview.deleteMany({});
        const result = await businessOverview.insertMany(businessOverviewData);
        res.status('200').json(result);
      } catch (error) {
        const errorResponse = { status: 500, message: `Unable to insert records`, data: `${error}` }
        res.status('500').json(errorResponse);
      }
    }

    insertRecords();
  });

  return { businessOverviewRouter };
}

module.exports = router;
