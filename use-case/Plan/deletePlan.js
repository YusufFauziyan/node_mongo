
/**
 *deletePlan.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Plan. {status, message, data}
 */
const deletePlan = ({ PlanDb }) => async (query,req,res) => {
  let deletedPlan = await PlanDb.deleteOne(query);
  if (!deletedPlan){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedPlan });
};

module.exports = deletePlan;