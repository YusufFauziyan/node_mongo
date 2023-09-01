/**
 *softDeleteTask.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Task. {status, message, data}
 */
const softDeleteTask = ({ TaskDb }) => async (params,req,res) => {
  let updatedTask = await TaskDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedTask){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedTask });
};
module.exports = softDeleteTask;