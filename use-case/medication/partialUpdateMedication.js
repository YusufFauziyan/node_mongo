/**
 *partialUpdateMedication.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Medication. {status, message, data}
 */
const partialUpdateMedication = ({ medicationDb }) => async (params,req,res) => {
  const medication = await medicationDb.updateOne(params.query,params.dataToUpdate);
  if (!medication){
    return response.recordNotFound();
  }
  return response.success({ data:medication });
};
module.exports = partialUpdateMedication;