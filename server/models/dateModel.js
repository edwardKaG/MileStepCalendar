const {Schema, model} = require('mongoose');

const EventSchema = new Schema({
    id: {type: String, unique: true, required: true},
    name: {type: String, required: true},
    description: {type: String, default: ''},
    date: {type: Date, required: true},
})

module.exports = model('Event', EventSchema);