
/**
 *bulkInsertEncounter.js
 */

const  encounterEntity = require('../../entities/encounter');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Encounters. {status, message, data}
 */

const bulkInsertEncounter = ({ encounterDb }) => async (dataToCreate,req,res) => {
  let encounterEntities = dataToCreate.map(item => encounterEntity(item));
  let createdEncounter = await encounterDb.create(encounterEntities);
  return response.success({ data:{ count:createdEncounter.length || 0 } });
};
module.exports = bulkInsertEncounter;