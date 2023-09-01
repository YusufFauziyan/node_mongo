/**
 *softDeleteUser.js
 */

const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeSoftDeleteWithDependency = require('./deleteDependent').softDeleteWithDependency;
const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated User. {status, message, data}
 */
const softDeleteUser = ({
  userDb,encounterDb,departmentsDb,enterpriseDb,noteDb,medicationDb,orderItemDb,orderDb,patientDb,CustomerDb,PlanDb,TaskDb,Chat_messageDb,CommentDb,Chat_groupDb,ToDoDb,Appointment_scheduleDb,Appointment_slotDb,MasterDb,EventDb,BlogDb,userTokensDb,roleDb,projectRouteDb,routeRoleDb,userRoleDb
}) => async (params,req,res) => {
  let {
    query, dataToUpdate,isWarning 
  } = params;
  let updatedUser = {};
  if (isWarning) {
    const getDependencyCount = makeGetDependencyCount({
      userDb,
      encounterDb,
      departmentsDb,
      enterpriseDb,
      noteDb,
      medicationDb,
      orderItemDb,
      orderDb,
      patientDb,
      CustomerDb,
      PlanDb,
      TaskDb,
      Chat_messageDb,
      CommentDb,
      Chat_groupDb,
      ToDoDb,
      Appointment_scheduleDb,
      Appointment_slotDb,
      MasterDb,
      EventDb,
      BlogDb,
      userTokensDb,
      roleDb,
      projectRouteDb,
      routeRoleDb,
      userRoleDb
    });
    return await getDependencyCount(query);
  } else {
    const softDeleteWithDependency = makeSoftDeleteWithDependency({
      userDb,
      encounterDb,
      departmentsDb,
      enterpriseDb,
      noteDb,
      medicationDb,
      orderItemDb,
      orderDb,
      patientDb,
      CustomerDb,
      PlanDb,
      TaskDb,
      Chat_messageDb,
      CommentDb,
      Chat_groupDb,
      ToDoDb,
      Appointment_scheduleDb,
      Appointment_slotDb,
      MasterDb,
      EventDb,
      BlogDb,
      userTokensDb,
      roleDb,
      projectRouteDb,
      routeRoleDb,
      userRoleDb
    });
    return await softDeleteWithDependency(query, dataToUpdate);
  }
};
module.exports = softDeleteUser;