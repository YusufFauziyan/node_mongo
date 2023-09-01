
/**
 *deletePatient.js
 */
 
const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeDeleteWithDependency = require('./deleteDependent').deleteWithDependency;
const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} params : request body including query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Patient. {status, message, data}
 */
const deletePatient = ({
  patientDb,orderDb
}) => async (params,req,res) => {
  let {
    query,isWarning 
  } = params;
  let deletedPatient = {};
  if (isWarning) {
    const getDependencyCount = makeGetDependencyCount({
      patientDb,
      orderDb
    });
    return await getDependencyCount(query);
  } else {
    const deleteWithDependency = makeDeleteWithDependency({
      patientDb,
      orderDb
    });
    return await deleteWithDependency(query);
  }
};

module.exports = deletePatient;