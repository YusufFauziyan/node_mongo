/**
 *addTask.js
 */

const  TaskEntity = require('../../entities/Task');
const response = require('../../utils/response');
/**
 * @description : create new record of Task in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addTask = ({
  TaskDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let Task = TaskEntity(dataToCreate);
  Task = await TaskDb.create(Task);
  return response.success({ data:Task });
};
module.exports = addTask;