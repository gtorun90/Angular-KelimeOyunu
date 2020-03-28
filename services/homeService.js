var express = require('express')
var router = express.Router()
var user = require('./userService')
var QuestionBank = require('../models/soruBankasi')

router.get('/index',user.checkAuthenticated,async(req,res)=>{
    var questionBank = await QuestionBank.find({},'-__v')
    var filteredQuestionBank = []
    for(var i=4;i<11;i++){
        var topLimit = questionBank.filter(x=>x.cevapharfsayisi == i).length -1
        var firstIndex = Math.abs(Math.floor(Math.random()*topLimit))
        var randomArray = questionBank.filter(x=>x.cevapharfsayisi == i)
                   .slice(firstIndex,firstIndex+2)  //aynı harf sayılı sorulardan rastgele 2 tanesini alma

        randomArray.map(x=>{   // Alınan 2 li sorular yeni bir diziye aktarılıp return ediliyor
            filteredQuestionBank.push({
                soru:x.soru,
                cevap:x.cevap,
                cevapharfsayisi:x.cevapharfsayisi,
                soruldu:x.soruldu
            })
        })
    } 
    filteredQuestionBank.sort((a,b)=>(a.cevapHarfSayisi > b.cevapHarfSayisi) ? 1 : (a.cevapHarfSayisi === b.cevapHarfSayisi) ? 1 : -1)
    res.send(filteredQuestionBank)     
})
router.post('/saveQuestion',user.checkAuthenticated,async(req,res)=>{
    var question = req.body
    var questionBank = new QuestionBank(question)
    questionBank.save((err,result) =>{
        if(err){
            console.log("Error While Saving Question")
            return res.status(500).send({message:"Error While Saving Question"})
        }
        return res.status(201).send({message:"Created"})
    })   
})


var home = {router}

module.exports = home