const TaskController = require('../controllers/task.controller');

module.exports = function(app){
    app.post('/api/tasks', TaskController.createTask);
    app.get('/api/tasks', TaskController.getAllTasks);
    app.get('/api/tasks/:id', TaskController.getTask);
    app.put('/api/tasks/:id', TaskController.updateTask);
    app.delete('/api/tasks/:id', TaskController.deleteTask);
    app.delete('/api/tasks', TaskController.deleteAllTasks)
}
