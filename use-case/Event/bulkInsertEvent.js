
/**
 *bulkInsertEvent.js
 */

const  EventEntity = require('../../entities/Event');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Events. {status, message, data}
 */

const bulkInsertEvent = ({ EventDb }) => async (dataToCreate,req,res) => {
  let eventEntities = dataToCreate.map(item => EventEntity(item));
  let createdEvent = await EventDb.create(eventEntities);
  return response.success({ data:{ count:createdEvent.length || 0 } });
};
module.exports = bulkInsertEvent;