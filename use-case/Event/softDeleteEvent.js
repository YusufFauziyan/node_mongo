/**
 *softDeleteEvent.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Event. {status, message, data}
 */
const softDeleteEvent = ({ EventDb }) => async (params,req,res) => {
  let updatedEvent = await EventDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedEvent){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedEvent });
};
module.exports = softDeleteEvent;