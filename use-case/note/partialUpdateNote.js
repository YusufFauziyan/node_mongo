/**
 *partialUpdateNote.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Note. {status, message, data}
 */
const partialUpdateNote = ({ noteDb }) => async (params,req,res) => {
  const note = await noteDb.updateOne(params.query,params.dataToUpdate);
  if (!note){
    return response.recordNotFound();
  }
  return response.success({ data:note });
};
module.exports = partialUpdateNote;