const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const businessOverviewSchema = new Schema({
  name: String,
  attendance: Number,
  packages: [
    {
      name: String,
      sales: [
        {
          month: String,
          amount: Number
        }
      ]
    }
  ]
})

const businessOverview = mongoose.model('businessOverview', businessOverviewSchema);
module.exports = businessOverview;
