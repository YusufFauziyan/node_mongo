/**
 *partialUpdatePatient.js
 */

const response = require('../../utils/response');
const makeCheckUniqueFieldsInDatabase = require('../../utils/checkUniqueFieldsInDatabase');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Patient. {status, message, data}
 */
const partialUpdatePatient = ({ patientDb }) => async (params,req,res) => {
            
  let checkUniqueFieldsInDatabase = makeCheckUniqueFieldsInDatabase(patientDb);
  let checkUniqueFields = await checkUniqueFieldsInDatabase([ 'code' ],params.dataToUpdate,'UPDATE',params.query);
  if (checkUniqueFields.isDuplicate){
    return response.validationError({ message : `${checkUniqueFields.value} already exists.Only unique ${checkUniqueFields.field} are allowed.` });
  }

  const patient = await patientDb.updateOne(params.query,params.dataToUpdate);
  if (!patient){
    return response.recordNotFound();
  }
  return response.success({ data:patient });
};
module.exports = partialUpdatePatient;