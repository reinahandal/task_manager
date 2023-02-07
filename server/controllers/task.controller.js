const {Task} = require('../models/task.model');

module.exports.createTask = (request,response) => {
    const {title, startDate, endDate, done} = request.body;
    Task.create({
        title,
        startDate,
        endDate,
        done:false
    })
    .then(task=>response.json(task))
    .catch(err=>response.status(400).json(err))
}

module.exports.getAllTasks = (request, response) => {
    Task.find({})
    .then(tasks => response.json(tasks))
    .catch(err => response.json(err))
}

module.exports.getTask = (request, response) => {
    Task.findOne({_id: request.params.id})
    .then(task => response.json(task))
    .catch(err => response.json(err))
}

module.exports.updateTask = (request, response) => {
    Task.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
    .then(updatedTask => response.json(updatedTask))
    .catch(err => response.status(400).json(err))
}

module.exports.deleteTask = (request, response) => {
    Task.deleteOne({_id: request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}

module.exports.deleteAllTasks = (request, response) => {
    Task.deleteMany({})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}