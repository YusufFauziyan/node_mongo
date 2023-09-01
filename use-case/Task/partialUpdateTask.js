/**
 *partialUpdateTask.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Task. {status, message, data}
 */
const partialUpdateTask = ({ TaskDb }) => async (params,req,res) => {
  const task = await TaskDb.updateOne(params.query,params.dataToUpdate);
  if (!task){
    return response.recordNotFound();
  }
  return response.success({ data:task });
};
module.exports = partialUpdateTask;