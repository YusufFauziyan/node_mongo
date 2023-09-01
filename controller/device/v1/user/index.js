const userDb = require('../../../../data-access/userDb');
const encounterDb = require('../../../../data-access/encounterDb');
const departmentsDb = require('../../../../data-access/departmentsDb');
const enterpriseDb = require('../../../../data-access/enterpriseDb');
const noteDb = require('../../../../data-access/noteDb');
const medicationDb = require('../../../../data-access/medicationDb');
const orderItemDb = require('../../../../data-access/orderItemDb');
const orderDb = require('../../../../data-access/orderDb');
const patientDb = require('../../../../data-access/patientDb');
const CustomerDb = require('../../../../data-access/CustomerDb');
const PlanDb = require('../../../../data-access/PlanDb');
const TaskDb = require('../../../../data-access/TaskDb');
const Chat_messageDb = require('../../../../data-access/Chat_messageDb');
const CommentDb = require('../../../../data-access/CommentDb');
const Chat_groupDb = require('../../../../data-access/Chat_groupDb');
const ToDoDb = require('../../../../data-access/ToDoDb');
const Appointment_scheduleDb = require('../../../../data-access/Appointment_scheduleDb');
const Appointment_slotDb = require('../../../../data-access/Appointment_slotDb');
const MasterDb = require('../../../../data-access/MasterDb');
const EventDb = require('../../../../data-access/EventDb');
const BlogDb = require('../../../../data-access/BlogDb');
const userTokensDb = require('../../../../data-access/userTokensDb');
const roleDb = require('../../../../data-access/roleDb');
const projectRouteDb = require('../../../../data-access/projectRouteDb');
const routeRoleDb = require('../../../../data-access/routeRoleDb');
const userRoleDb = require('../../../../data-access/userRoleDb');

const userSchema = require('../../../../validation/schema/user');

const createValidation = require('../../../../validation')(userSchema.createSchema);
const updateValidation = require('../../../../validation')(userSchema.updateSchema);
const filterValidation = require('../../../../validation')(userSchema.filterValidationSchema);
const changePasswordUsecase = require('../../../../use-case/user/changePassword')({ userDb });
const updateProfileUsecase = require('../../../../use-case/user/updateProfile')({
  userDb,
  updateValidation
});
const getUserUsecase = require('../../../../use-case/user/getUser')({
  userDb,
  filterValidation
});

const userController = require('./user');

const changePassword = userController.changePassword(changePasswordUsecase);
const updateProfile = userController.updateProfile(updateProfileUsecase);
const getLoggedInUserInfo = userController.getLoggedInUserInfo(getUserUsecase);

module.exports = {
  changePassword,
  updateProfile,
  getLoggedInUserInfo,
};