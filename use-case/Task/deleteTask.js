
/**
 *deleteTask.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Task. {status, message, data}
 */
const deleteTask = ({ TaskDb }) => async (query,req,res) => {
  let deletedTask = await TaskDb.deleteOne(query);
  if (!deletedTask){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedTask });
};

module.exports = deleteTask;