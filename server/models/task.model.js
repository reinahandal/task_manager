const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'Task title is required'],
        minLength:[2, "Title must be at least 2 characters"]
    },
    startDate:{
        type:Date,
        required:[true, 'Start Date is required']
    },
    endDate:{
        type:Date,
        required:[true, 'End Date is required']
    },
    done:{
        type:Boolean,
    }
}, {timestamps:true});

module.exports.Task = mongoose.model('Task', TaskSchema);