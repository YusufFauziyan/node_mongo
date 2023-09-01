
/**
 *bulkInsertMaster.js
 */

const  MasterEntity = require('../../entities/Master');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Masters. {status, message, data}
 */

const bulkInsertMaster = ({ MasterDb }) => async (dataToCreate,req,res) => {
  let masterEntities = dataToCreate.map(item => MasterEntity(item));
  let createdMaster = await MasterDb.create(masterEntities);
  return response.success({ data:{ count:createdMaster.length || 0 } });
};
module.exports = bulkInsertMaster;