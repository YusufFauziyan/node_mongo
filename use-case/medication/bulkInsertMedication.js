
/**
 *bulkInsertMedication.js
 */

const  medicationEntity = require('../../entities/medication');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Medications. {status, message, data}
 */

const bulkInsertMedication = ({ medicationDb }) => async (dataToCreate,req,res) => {
  let medicationEntities = dataToCreate.map(item => medicationEntity(item));
  let createdMedication = await medicationDb.create(medicationEntities);
  return response.success({ data:{ count:createdMedication.length || 0 } });
};
module.exports = bulkInsertMedication;