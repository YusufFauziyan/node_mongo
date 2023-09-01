/**
 *softDeletePlan.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Plan. {status, message, data}
 */
const softDeletePlan = ({ PlanDb }) => async (params,req,res) => {
  let updatedPlan = await PlanDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedPlan){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedPlan });
};
module.exports = softDeletePlan;