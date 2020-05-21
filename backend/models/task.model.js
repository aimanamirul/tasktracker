const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const task = new Schema({
    name: { type: String, required: true},
    desc: { type: String, required: true},
    due: {type: Date, required: true},
    status: {type: String, required: true},
}, {timestamps: true});

const Task = mongoose.model('tasks', task);

module.exports = Task;