const mongoose  = require('mongoose');

const Schema = mongoose.Schema;

const keySchema = new Schema({
    key: {
        type: String,
        required: true,
    },
},{
    timestamp: true,
});

const Key = mongoose.model('Key',keySchema);
module.exports = Key;