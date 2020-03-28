var mongoose = require('mongoose')

var soruBankasiSchema = new mongoose.Schema({
  soru:String,
  cevap:String,
  cevapharfsayisi:String,
  soruldu:Boolean
})

module.exports = mongoose.model('SoruBankasi',soruBankasiSchema)