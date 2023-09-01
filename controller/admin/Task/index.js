const TaskDb = require('../../../data-access/TaskDb');

const TaskSchema = require('../../../validation/schema/Task');

const createValidation = require('../../../validation')(TaskSchema.createSchema);
const updateValidation = require('../../../validation')(TaskSchema.updateSchema);
const filterValidation = require('../../../validation')(TaskSchema.filterValidationSchema);
const addTaskUsecase = require('../../../use-case/Task/addTask')({
  TaskDb,
  createValidation 
});
const findAllTaskUsecase = require('../../../use-case/Task/findAllTask')({
  TaskDb,
  filterValidation
});
const getTaskCountUsecase = require('../../../use-case/Task/getTaskCount')({
  TaskDb,
  filterValidation
});
const getTaskUsecase = require('../../../use-case/Task/getTask')({
  TaskDb,
  filterValidation
});
const updateTaskUsecase = require('../../../use-case/Task/updateTask')({
  TaskDb,
  updateValidation 
});
const partialUpdateTaskUsecase = require('../../../use-case/Task/partialUpdateTask')({ TaskDb });
const softDeleteTaskUsecase = require('../../../use-case/Task/softDeleteTask')({ TaskDb });
const softDeleteManyTaskUsecase = require('../../../use-case/Task/softDeleteManyTask')({ TaskDb });
const bulkInsertTaskUsecase = require('../../../use-case/Task/bulkInsertTask')({ TaskDb });
const bulkUpdateTaskUsecase = require('../../../use-case/Task/bulkUpdateTask')({ TaskDb });
const deleteTaskUsecase = require('../../../use-case/Task/deleteTask')({ TaskDb });
const deleteManyTaskUsecase = require('../../../use-case/Task/deleteManyTask')({ TaskDb });

const TaskController = require('./Task');

const addTask = TaskController.addTask(addTaskUsecase);
const findAllTask = TaskController.findAllTask(findAllTaskUsecase);
const getTaskCount = TaskController.getTaskCount(getTaskCountUsecase);
const getTaskById = TaskController.getTask(getTaskUsecase);
const updateTask = TaskController.updateTask(updateTaskUsecase);
const partialUpdateTask = TaskController.partialUpdateTask(partialUpdateTaskUsecase);
const softDeleteTask = TaskController.softDeleteTask(softDeleteTaskUsecase);
const softDeleteManyTask = TaskController.softDeleteManyTask(softDeleteManyTaskUsecase);
const bulkInsertTask = TaskController.bulkInsertTask(bulkInsertTaskUsecase);
const bulkUpdateTask = TaskController.bulkUpdateTask(bulkUpdateTaskUsecase);
const deleteTask = TaskController.deleteTask(deleteTaskUsecase);
const deleteManyTask = TaskController.deleteManyTask(deleteManyTaskUsecase);

module.exports = {
  addTask,
  findAllTask,
  getTaskCount,
  getTaskById,
  updateTask,
  partialUpdateTask,
  softDeleteTask,
  softDeleteManyTask,
  bulkInsertTask,
  bulkUpdateTask,
  deleteTask,
  deleteManyTask,
};