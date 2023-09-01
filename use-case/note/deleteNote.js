
/**
 *deleteNote.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Note. {status, message, data}
 */
const deleteNote = ({ noteDb }) => async (query,req,res) => {
  let deletedNote = await noteDb.deleteOne(query);
  if (!deletedNote){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedNote });
};

module.exports = deleteNote;