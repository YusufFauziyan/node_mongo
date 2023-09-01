/**
 *partialUpdateEvent.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Event. {status, message, data}
 */
const partialUpdateEvent = ({ EventDb }) => async (params,req,res) => {
  const event = await EventDb.updateOne(params.query,params.dataToUpdate);
  if (!event){
    return response.recordNotFound();
  }
  return response.success({ data:event });
};
module.exports = partialUpdateEvent;