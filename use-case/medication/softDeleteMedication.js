/**
 *softDeleteMedication.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Medication. {status, message, data}
 */
const softDeleteMedication = ({ medicationDb }) => async (params,req,res) => {
  let updatedMedication = await medicationDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedMedication){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedMedication });
};
module.exports = softDeleteMedication;