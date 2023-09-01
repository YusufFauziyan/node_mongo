/**
 *updateNote.js
 */

const  noteEntity = require('../../entities/note');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Note. {status, message, data}
 */
const updateNote = ({
  noteDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let note = noteEntity(dataToUpdate);
  note = await noteDb.updateOne(query,note);
  if (!note){
    return response.recordNotFound();
  }
  return response.success({ data:note });
};
module.exports = updateNote;