/**
 *addEncounter.js
 */

const  encounterEntity = require('../../entities/encounter');
const response = require('../../utils/response');
/**
 * @description : create new record of encounter in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addEncounter = ({
  encounterDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let encounter = encounterEntity(dataToCreate);
  encounter = await encounterDb.create(encounter);
  return response.success({ data:encounter });
};
module.exports = addEncounter;