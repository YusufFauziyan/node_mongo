
/**
 *bulkInsertTask.js
 */

const  TaskEntity = require('../../entities/Task');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Tasks. {status, message, data}
 */

const bulkInsertTask = ({ TaskDb }) => async (dataToCreate,req,res) => {
  let taskEntities = dataToCreate.map(item => TaskEntity(item));
  let createdTask = await TaskDb.create(taskEntities);
  return response.success({ data:{ count:createdTask.length || 0 } });
};
module.exports = bulkInsertTask;