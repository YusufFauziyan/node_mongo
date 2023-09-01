
/**
 *deleteEvent.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Event. {status, message, data}
 */
const deleteEvent = ({ EventDb }) => async (query,req,res) => {
  let deletedEvent = await EventDb.deleteOne(query);
  if (!deletedEvent){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedEvent });
};

module.exports = deleteEvent;