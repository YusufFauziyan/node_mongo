/**
 *updateMaster.js
 */

const  MasterEntity = require('../../entities/Master');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Master. {status, message, data}
 */
const updateMaster = ({
  MasterDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let master = MasterEntity(dataToUpdate);
  master = await MasterDb.updateOne(query,master);
  if (!master){
    return response.recordNotFound();
  }
  return response.success({ data:master });
};
module.exports = updateMaster;