
/**
 *bulkInsertNote.js
 */

const  noteEntity = require('../../entities/note');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Notes. {status, message, data}
 */

const bulkInsertNote = ({ noteDb }) => async (dataToCreate,req,res) => {
  let noteEntities = dataToCreate.map(item => noteEntity(item));
  let createdNote = await noteDb.create(noteEntities);
  return response.success({ data:{ count:createdNote.length || 0 } });
};
module.exports = bulkInsertNote;