const mongoose = require ('mongoose');

var candidateschema = new mongoose.Schema({
    Name: {
        type: String
    },
    Email: {
        type: String
    },
    Round_1_Score: {
        type: Number
    },
    Round_2_Score: {
        type: Number
    },
    Round_3_Score:{
        type: Number
    }
});

mongoose.model('Candidate' , candidateschema);
