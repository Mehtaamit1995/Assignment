const express = require('express');
var router = express.Router();
const mongoose =require('mongoose');
const Candidate = mongoose.model('Candidate');

router.get('/', (req,res) => {
    res.render("Candidate/addOrEdit", {
        viewTitle : "Insert Candidate"
    });
});

router.post('/', (req,res) => {
    insertRecord(req,res); 
})

router.post('/', (req,res) => {
    AssignScore(req,res); 
})


function insertRecord(req, res){
    var candidate = new Candidate();   
    candidate.FullName = req.body.FullName;
    candidate.Email = req.body.Email;
    candidate.TestScore1 = req.body.TestScore1;
    candidate.TestScore2 = req.body.TestScore2;
    candidate.TestScore3 = req.body.TestScore3;
    candidate.save((err, doc) => {
        if(!err)
        res.redirect('Candidate/List');
        else{
            console.log('Error during insertion : ', +err);
        }
    });

}

function AssignScore(req, res) {
    var Total = new Total();
    //var Highest = new Highest();
    var Average = new Average();
    Total = (candidate.TestScore1 + candidate.TestScore2 + candidate.TestScore3);
    Average = (Total/3);

    console.log("Average grade: " + (Average)/candidate.length);

    if (Average < 60){
        console.log("Grade : F");      
        } 
      else if (Average < 70) {
              console.log("Grade : D"); 
                } 
      else if (Average < 80) 
           {
              console.log("Grade : C"); 
      } else if (Average < 90) {
              console.log("Grade : B"); 
      } else if (Average < 100) {
              console.log("Grade : A"); 
}
}

router.get('/List', (req,res) => {
    res.json('From List');
});

module.exports = router;
