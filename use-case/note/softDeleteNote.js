/**
 *softDeleteNote.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Note. {status, message, data}
 */
const softDeleteNote = ({ noteDb }) => async (params,req,res) => {
  let updatedNote = await noteDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedNote){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedNote });
};
module.exports = softDeleteNote;