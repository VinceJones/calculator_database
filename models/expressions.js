var mongoose = require('mongoose');

var expressionSchema = new mongoose.Schema({
    expression: String
});

module.exports = mongoose.model('expressions', expressionSchema);