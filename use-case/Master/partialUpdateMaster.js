/**
 *partialUpdateMaster.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Master. {status, message, data}
 */
const partialUpdateMaster = ({ MasterDb }) => async (params,req,res) => {
  const master = await MasterDb.updateOne(params.query,params.dataToUpdate);
  if (!master){
    return response.recordNotFound();
  }
  return response.success({ data:master });
};
module.exports = partialUpdateMaster;