/**
 *partialUpdatePlan.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Plan. {status, message, data}
 */
const partialUpdatePlan = ({ PlanDb }) => async (params,req,res) => {
  const plan = await PlanDb.updateOne(params.query,params.dataToUpdate);
  if (!plan){
    return response.recordNotFound();
  }
  return response.success({ data:plan });
};
module.exports = partialUpdatePlan;