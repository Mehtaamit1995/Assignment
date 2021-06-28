const mongoose = require ('mongoose');
mongoose.connect('mongodb+srv://Ansh:vardy3999@cluster0.hefuo.mongodb.net/CandidateDB' , { useUnifiedTopology: true, useNewUrlParser: true } , (err) => {
    if (!err) {console.log('Database Connection Succeeded')}
    else { console.log('Error in Database Connection :' + err)}
});

require('./Candidate.model');