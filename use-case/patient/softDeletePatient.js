/**
 *softDeletePatient.js
 */

const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeSoftDeleteWithDependency = require('./deleteDependent').softDeleteWithDependency;
const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Patient. {status, message, data}
 */
const softDeletePatient = ({
  patientDb,orderDb
}) => async (params,req,res) => {
  let {
    query, dataToUpdate,isWarning 
  } = params;
  let updatedPatient = {};
  if (isWarning) {
    const getDependencyCount = makeGetDependencyCount({
      patientDb,
      orderDb
    });
    return await getDependencyCount(query);
  } else {
    const softDeleteWithDependency = makeSoftDeleteWithDependency({
      patientDb,
      orderDb
    });
    return await softDeleteWithDependency(query, dataToUpdate);
  }
};
module.exports = softDeletePatient;