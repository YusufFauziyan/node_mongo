/**
 *partialUpdateEncounter.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Encounter. {status, message, data}
 */
const partialUpdateEncounter = ({ encounterDb }) => async (params,req,res) => {
  const encounter = await encounterDb.updateOne(params.query,params.dataToUpdate);
  if (!encounter){
    return response.recordNotFound();
  }
  return response.success({ data:encounter });
};
module.exports = partialUpdateEncounter;