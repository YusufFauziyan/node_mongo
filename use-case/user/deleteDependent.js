const response = require('../../utils/response');

const getDependencyCount = ({
  userDb,encounterDb,departmentsDb,enterpriseDb,noteDb,medicationDb,orderItemDb,orderDb,patientDb,CustomerDb,PlanDb,TaskDb,Chat_messageDb,CommentDb,Chat_groupDb,ToDoDb,Appointment_scheduleDb,Appointment_slotDb,MasterDb,EventDb,BlogDb,userTokensDb,roleDb,projectRouteDb,routeRoleDb,userRoleDb
})=> async (filter) =>{
  let user = await userDb.findMany(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const encounterFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const encounterCnt =  await encounterDb.count(encounterFilter);

    const departmentsFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const departmentsCnt =  await departmentsDb.count(departmentsFilter);

    const enterpriseFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const enterpriseCnt =  await enterpriseDb.count(enterpriseFilter);

    const noteFilter = { '$or': [{ provider : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const noteCnt =  await noteDb.count(noteFilter);

    const medicationFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const medicationCnt =  await medicationDb.count(medicationFilter);

    const orderItemFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const orderItemCnt =  await orderItemDb.count(orderItemFilter);

    const orderFilter = { '$or': [{ orderBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const orderCnt =  await orderDb.count(orderFilter);

    const patientFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const patientCnt =  await patientDb.count(patientFilter);

    const CustomerFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const CustomerCnt =  await CustomerDb.count(CustomerFilter);

    const PlanFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const PlanCnt =  await PlanDb.count(PlanFilter);

    const TaskFilter = { '$or': [{ completedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const TaskCnt =  await TaskDb.count(TaskFilter);

    const Chat_messageFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Chat_messageCnt =  await Chat_messageDb.count(Chat_messageFilter);

    const CommentFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const CommentCnt =  await CommentDb.count(CommentFilter);

    const Chat_groupFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Chat_groupCnt =  await Chat_groupDb.count(Chat_groupFilter);

    const ToDoFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const ToDoCnt =  await ToDoDb.count(ToDoFilter);

    const Appointment_scheduleFilter = { '$or': [{ host : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Appointment_scheduleCnt =  await Appointment_scheduleDb.count(Appointment_scheduleFilter);

    const Appointment_slotFilter = { '$or': [{ userId : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Appointment_slotCnt =  await Appointment_slotDb.count(Appointment_slotFilter);

    const MasterFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const MasterCnt =  await MasterDb.count(MasterFilter);

    const EventFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const EventCnt =  await EventDb.count(EventFilter);

    const BlogFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const BlogCnt =  await BlogDb.count(BlogFilter);

    const userFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userCnt =  await userDb.count(userFilter);

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  await userTokensDb.count(userTokensFilter);

    const roleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const roleCnt =  await roleDb.count(roleFilter);

    const projectRouteFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const projectRouteCnt =  await projectRouteDb.count(projectRouteFilter);

    const routeRoleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const routeRoleCnt =  await routeRoleDb.count(routeRoleFilter);

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userRoleCnt =  await userRoleDb.count(userRoleFilter);
    let result = {
      encounter :encounterCnt ,
      departments :departmentsCnt ,
      enterprise :enterpriseCnt ,
      note :noteCnt ,
      medication :medicationCnt ,
      orderItem :orderItemCnt ,
      order :orderCnt ,
      patient :patientCnt ,
      Customer :CustomerCnt ,
      Plan :PlanCnt ,
      Task :TaskCnt ,
      Chat_message :Chat_messageCnt ,
      Comment :CommentCnt ,
      Chat_group :Chat_groupCnt ,
      ToDo :ToDoCnt ,
      Appointment_schedule :Appointment_scheduleCnt ,
      Appointment_slot :Appointment_slotCnt ,
      Master :MasterCnt ,
      Event :EventCnt ,
      Blog :BlogCnt ,
      user :userCnt + 1,
      userTokens :userTokensCnt ,
      role :roleCnt ,
      projectRoute :projectRouteCnt ,
      routeRole :routeRoleCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  user : 0 }
    });
  }
};

const deleteWithDependency = ({
  userDb,encounterDb,departmentsDb,enterpriseDb,noteDb,medicationDb,orderItemDb,orderDb,patientDb,CustomerDb,PlanDb,TaskDb,Chat_messageDb,CommentDb,Chat_groupDb,ToDoDb,Appointment_scheduleDb,Appointment_slotDb,MasterDb,EventDb,BlogDb,userTokensDb,roleDb,projectRouteDb,routeRoleDb,userRoleDb
})=> async (filter) =>{
  let user = await userDb.findMany(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const encounterFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const encounterCnt =  (await encounterDb.deleteMany(encounterFilter));

    const departmentsFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const departmentsCnt =  (await departmentsDb.deleteMany(departmentsFilter));

    const enterpriseFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const enterpriseCnt =  (await enterpriseDb.deleteMany(enterpriseFilter));

    const noteFilter = { '$or': [{ provider : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const noteCnt =  (await noteDb.deleteMany(noteFilter));

    const medicationFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const medicationCnt =  (await medicationDb.deleteMany(medicationFilter));

    const orderItemFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const orderItemCnt =  (await orderItemDb.deleteMany(orderItemFilter));

    const orderFilter = { '$or': [{ orderBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const orderCnt =  (await orderDb.deleteMany(orderFilter));

    const patientFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const patientCnt =  (await patientDb.deleteMany(patientFilter));

    const CustomerFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const CustomerCnt =  (await CustomerDb.deleteMany(CustomerFilter));

    const PlanFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const PlanCnt =  (await PlanDb.deleteMany(PlanFilter));

    const TaskFilter = { '$or': [{ completedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const TaskCnt =  (await TaskDb.deleteMany(TaskFilter));

    const Chat_messageFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Chat_messageCnt =  (await Chat_messageDb.deleteMany(Chat_messageFilter));

    const CommentFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const CommentCnt =  (await CommentDb.deleteMany(CommentFilter));

    const Chat_groupFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Chat_groupCnt =  (await Chat_groupDb.deleteMany(Chat_groupFilter));

    const ToDoFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const ToDoCnt =  (await ToDoDb.deleteMany(ToDoFilter));

    const Appointment_scheduleFilter = { '$or': [{ host : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Appointment_scheduleCnt =  (await Appointment_scheduleDb.deleteMany(Appointment_scheduleFilter));

    const Appointment_slotFilter = { '$or': [{ userId : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Appointment_slotCnt =  (await Appointment_slotDb.deleteMany(Appointment_slotFilter));

    const MasterFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const MasterCnt =  (await MasterDb.deleteMany(MasterFilter));

    const EventFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const EventCnt =  (await EventDb.deleteMany(EventFilter));

    const BlogFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const BlogCnt =  (await BlogDb.deleteMany(BlogFilter));

    const userFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userCnt =  (await userDb.deleteMany(userFilter));

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  (await userTokensDb.deleteMany(userTokensFilter));

    const roleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const roleCnt =  (await roleDb.deleteMany(roleFilter));

    const projectRouteFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const projectRouteCnt =  (await projectRouteDb.deleteMany(projectRouteFilter));

    const routeRoleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const routeRoleCnt =  (await routeRoleDb.deleteMany(routeRoleFilter));

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userRoleCnt =  (await userRoleDb.deleteMany(userRoleFilter));
    let deleted = (await userDb.deleteMany(filter));
    let result = {
      encounter :encounterCnt ,
      departments :departmentsCnt ,
      enterprise :enterpriseCnt ,
      note :noteCnt ,
      medication :medicationCnt ,
      orderItem :orderItemCnt ,
      order :orderCnt ,
      patient :patientCnt ,
      Customer :CustomerCnt ,
      Plan :PlanCnt ,
      Task :TaskCnt ,
      Chat_message :Chat_messageCnt ,
      Comment :CommentCnt ,
      Chat_group :Chat_groupCnt ,
      ToDo :ToDoCnt ,
      Appointment_schedule :Appointment_scheduleCnt ,
      Appointment_slot :Appointment_slotCnt ,
      Master :MasterCnt ,
      Event :EventCnt ,
      Blog :BlogCnt ,
      user :userCnt + deleted,
      userTokens :userTokensCnt ,
      role :roleCnt ,
      projectRoute :projectRouteCnt ,
      routeRole :routeRoleCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  user : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  userDb,encounterDb,departmentsDb,enterpriseDb,noteDb,medicationDb,orderItemDb,orderDb,patientDb,CustomerDb,PlanDb,TaskDb,Chat_messageDb,CommentDb,Chat_groupDb,ToDoDb,Appointment_scheduleDb,Appointment_slotDb,MasterDb,EventDb,BlogDb,userTokensDb,roleDb,projectRouteDb,routeRoleDb,userRoleDb
}) => async (filter,updateBody) =>{
  let user = await userDb.findMany(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const encounterFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const encounterCnt =  (await encounterDb.updateMany(encounterFilter,updateBody));

    const departmentsFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const departmentsCnt =  (await departmentsDb.updateMany(departmentsFilter,updateBody));

    const enterpriseFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const enterpriseCnt =  (await enterpriseDb.updateMany(enterpriseFilter,updateBody));

    const noteFilter = { '$or': [{ provider : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const noteCnt =  (await noteDb.updateMany(noteFilter,updateBody));

    const medicationFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const medicationCnt =  (await medicationDb.updateMany(medicationFilter,updateBody));

    const orderItemFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const orderItemCnt =  (await orderItemDb.updateMany(orderItemFilter,updateBody));

    const orderFilter = { '$or': [{ orderBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const orderCnt =  (await orderDb.updateMany(orderFilter,updateBody));

    const patientFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const patientCnt =  (await patientDb.updateMany(patientFilter,updateBody));

    const CustomerFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const CustomerCnt =  (await CustomerDb.updateMany(CustomerFilter,updateBody));

    const PlanFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const PlanCnt =  (await PlanDb.updateMany(PlanFilter,updateBody));

    const TaskFilter = { '$or': [{ completedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const TaskCnt =  (await TaskDb.updateMany(TaskFilter,updateBody));

    const Chat_messageFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Chat_messageCnt =  (await Chat_messageDb.updateMany(Chat_messageFilter,updateBody));

    const CommentFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const CommentCnt =  (await CommentDb.updateMany(CommentFilter,updateBody));

    const Chat_groupFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Chat_groupCnt =  (await Chat_groupDb.updateMany(Chat_groupFilter,updateBody));

    const ToDoFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const ToDoCnt =  (await ToDoDb.updateMany(ToDoFilter,updateBody));

    const Appointment_scheduleFilter = { '$or': [{ host : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Appointment_scheduleCnt =  (await Appointment_scheduleDb.updateMany(Appointment_scheduleFilter,updateBody));

    const Appointment_slotFilter = { '$or': [{ userId : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const Appointment_slotCnt =  (await Appointment_slotDb.updateMany(Appointment_slotFilter,updateBody));

    const MasterFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const MasterCnt =  (await MasterDb.updateMany(MasterFilter,updateBody));

    const EventFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const EventCnt =  (await EventDb.updateMany(EventFilter,updateBody));

    const BlogFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const BlogCnt =  (await BlogDb.updateMany(BlogFilter,updateBody));

    const userFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userCnt =  (await userDb.updateMany(userFilter,updateBody));

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  (await userTokensDb.updateMany(userTokensFilter,updateBody));

    const roleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const roleCnt =  (await roleDb.updateMany(roleFilter,updateBody));

    const projectRouteFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const projectRouteCnt =  (await projectRouteDb.updateMany(projectRouteFilter,updateBody));

    const routeRoleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const routeRoleCnt =  (await routeRoleDb.updateMany(routeRoleFilter,updateBody));

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userRoleCnt =  (await userRoleDb.updateMany(userRoleFilter,updateBody));
    let updated = (await userDb.updateMany(filter,updateBody));
    let result = {
      encounter :encounterCnt ,
      departments :departmentsCnt ,
      enterprise :enterpriseCnt ,
      note :noteCnt ,
      medication :medicationCnt ,
      orderItem :orderItemCnt ,
      order :orderCnt ,
      patient :patientCnt ,
      Customer :CustomerCnt ,
      Plan :PlanCnt ,
      Task :TaskCnt ,
      Chat_message :Chat_messageCnt ,
      Comment :CommentCnt ,
      Chat_group :Chat_groupCnt ,
      ToDo :ToDoCnt ,
      Appointment_schedule :Appointment_scheduleCnt ,
      Appointment_slot :Appointment_slotCnt ,
      Master :MasterCnt ,
      Event :EventCnt ,
      Blog :BlogCnt ,
      user :userCnt + updated,
      userTokens :userTokensCnt ,
      role :roleCnt ,
      projectRoute :projectRouteCnt ,
      routeRole :routeRoleCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  user : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
