const mongoose = require('mongoose')

const ConformOrder = new mongoose.Schema({
   Details:{}
},{timelaps:true})

module.exports = new mongoose.model('conformOder',ConformOrder)