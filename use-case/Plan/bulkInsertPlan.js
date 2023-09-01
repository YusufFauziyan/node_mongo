
/**
 *bulkInsertPlan.js
 */

const  PlanEntity = require('../../entities/Plan');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Plans. {status, message, data}
 */

const bulkInsertPlan = ({ PlanDb }) => async (dataToCreate,req,res) => {
  let planEntities = dataToCreate.map(item => PlanEntity(item));
  let createdPlan = await PlanDb.create(planEntities);
  return response.success({ data:{ count:createdPlan.length || 0 } });
};
module.exports = bulkInsertPlan;