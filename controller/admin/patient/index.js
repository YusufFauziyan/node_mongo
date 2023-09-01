const patientDb = require('../../../data-access/patientDb');
const orderDb = require('../../../data-access/orderDb');

const patientSchema = require('../../../validation/schema/patient');

const createValidation = require('../../../validation')(patientSchema.createSchema);
const updateValidation = require('../../../validation')(patientSchema.updateSchema);
const filterValidation = require('../../../validation')(patientSchema.filterValidationSchema);
const addPatientUsecase = require('../../../use-case/patient/addPatient')({
  patientDb,
  createValidation 
});
const findAllPatientUsecase = require('../../../use-case/patient/findAllPatient')({
  patientDb,
  filterValidation
});
const getPatientCountUsecase = require('../../../use-case/patient/getPatientCount')({
  patientDb,
  filterValidation
});
const getPatientUsecase = require('../../../use-case/patient/getPatient')({
  patientDb,
  filterValidation
});
const updatePatientUsecase = require('../../../use-case/patient/updatePatient')({
  patientDb,
  updateValidation 
});
const partialUpdatePatientUsecase = require('../../../use-case/patient/partialUpdatePatient')({ patientDb });
const softDeletePatientUsecase = require('../../../use-case/patient/softDeletePatient')({
  patientDb,
  orderDb
});
const softDeleteManyPatientUsecase = require('../../../use-case/patient/softDeleteManyPatient')({
  patientDb,
  orderDb
});
const bulkInsertPatientUsecase = require('../../../use-case/patient/bulkInsertPatient')({ patientDb });
const bulkUpdatePatientUsecase = require('../../../use-case/patient/bulkUpdatePatient')({ patientDb });
const deletePatientUsecase = require('../../../use-case/patient/deletePatient')({
  patientDb,
  orderDb
});
const deleteManyPatientUsecase = require('../../../use-case/patient/deleteManyPatient')({
  patientDb,
  orderDb
});

const patientController = require('./patient');

const addPatient = patientController.addPatient(addPatientUsecase);
const findAllPatient = patientController.findAllPatient(findAllPatientUsecase);
const getPatientCount = patientController.getPatientCount(getPatientCountUsecase);
const getPatientById = patientController.getPatient(getPatientUsecase);
const updatePatient = patientController.updatePatient(updatePatientUsecase);
const partialUpdatePatient = patientController.partialUpdatePatient(partialUpdatePatientUsecase);
const softDeletePatient = patientController.softDeletePatient(softDeletePatientUsecase);
const softDeleteManyPatient = patientController.softDeleteManyPatient(softDeleteManyPatientUsecase);
const bulkInsertPatient = patientController.bulkInsertPatient(bulkInsertPatientUsecase);
const bulkUpdatePatient = patientController.bulkUpdatePatient(bulkUpdatePatientUsecase);
const deletePatient = patientController.deletePatient(deletePatientUsecase);
const deleteManyPatient = patientController.deleteManyPatient(deleteManyPatientUsecase);

module.exports = {
  addPatient,
  findAllPatient,
  getPatientCount,
  getPatientById,
  updatePatient,
  partialUpdatePatient,
  softDeletePatient,
  softDeleteManyPatient,
  bulkInsertPatient,
  bulkUpdatePatient,
  deletePatient,
  deleteManyPatient,
};