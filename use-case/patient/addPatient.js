/**
 *addPatient.js
 */

const  patientEntity = require('../../entities/patient');
const response = require('../../utils/response');
const makeCheckUniqueFieldsInDatabase = require('../../utils/checkUniqueFieldsInDatabase');
/**
 * @description : create new record of patient in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addPatient = ({
  patientDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let patient = patientEntity(dataToCreate);
  let checkUniqueFieldsInDatabase = makeCheckUniqueFieldsInDatabase(patientDb);
  let checkUniqueFields = await checkUniqueFieldsInDatabase([ 'code' ],patient,'INSERT');
  if (checkUniqueFields.isDuplicate){
    return response.validationError({ message : `${checkUniqueFields.value} already exists.Only unique ${checkUniqueFields.field} are allowed.` });
  }

  patient = await patientDb.create(patient);
  return response.success({ data:patient });
};
module.exports = addPatient;