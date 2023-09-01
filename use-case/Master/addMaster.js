/**
 *addMaster.js
 */

const  MasterEntity = require('../../entities/Master');
const response = require('../../utils/response');
/**
 * @description : create new record of Master in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addMaster = ({
  MasterDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let Master = MasterEntity(dataToCreate);
  Master = await MasterDb.create(Master);
  return response.success({ data:Master });
};
module.exports = addMaster;