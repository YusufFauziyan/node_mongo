/**
 *addMedication.js
 */

const  medicationEntity = require('../../entities/medication');
const response = require('../../utils/response');
/**
 * @description : create new record of medication in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addMedication = ({
  medicationDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let medication = medicationEntity(dataToCreate);
  medication = await medicationDb.create(medication);
  return response.success({ data:medication });
};
module.exports = addMedication;