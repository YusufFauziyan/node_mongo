
/**
 *deleteMedication.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Medication. {status, message, data}
 */
const deleteMedication = ({ medicationDb }) => async (query,req,res) => {
  let deletedMedication = await medicationDb.deleteOne(query);
  if (!deletedMedication){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedMedication });
};

module.exports = deleteMedication;