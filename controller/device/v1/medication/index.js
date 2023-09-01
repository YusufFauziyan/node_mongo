const medicationDb = require('../../../../data-access/medicationDb');

const medicationSchema = require('../../../../validation/schema/medication');

const createValidation = require('../../../../validation')(medicationSchema.createSchema);
const updateValidation = require('../../../../validation')(medicationSchema.updateSchema);
const filterValidation = require('../../../../validation')(medicationSchema.filterValidationSchema);
const addMedicationUsecase = require('../../../../use-case/medication/addMedication')({
  medicationDb,
  createValidation 
});
const findAllMedicationUsecase = require('../../../../use-case/medication/findAllMedication')({
  medicationDb,
  filterValidation
});
const getMedicationCountUsecase = require('../../../../use-case/medication/getMedicationCount')({
  medicationDb,
  filterValidation
});
const getMedicationUsecase = require('../../../../use-case/medication/getMedication')({
  medicationDb,
  filterValidation
});
const updateMedicationUsecase = require('../../../../use-case/medication/updateMedication')({
  medicationDb,
  updateValidation 
});
const partialUpdateMedicationUsecase = require('../../../../use-case/medication/partialUpdateMedication')({ medicationDb });
const softDeleteMedicationUsecase = require('../../../../use-case/medication/softDeleteMedication')({ medicationDb });
const softDeleteManyMedicationUsecase = require('../../../../use-case/medication/softDeleteManyMedication')({ medicationDb });
const bulkInsertMedicationUsecase = require('../../../../use-case/medication/bulkInsertMedication')({ medicationDb });
const bulkUpdateMedicationUsecase = require('../../../../use-case/medication/bulkUpdateMedication')({ medicationDb });
const deleteMedicationUsecase = require('../../../../use-case/medication/deleteMedication')({ medicationDb });
const deleteManyMedicationUsecase = require('../../../../use-case/medication/deleteManyMedication')({ medicationDb });

const medicationController = require('./medication');

const addMedication = medicationController.addMedication(addMedicationUsecase);
const findAllMedication = medicationController.findAllMedication(findAllMedicationUsecase);
const getMedicationCount = medicationController.getMedicationCount(getMedicationCountUsecase);
const getMedicationById = medicationController.getMedication(getMedicationUsecase);
const updateMedication = medicationController.updateMedication(updateMedicationUsecase);
const partialUpdateMedication = medicationController.partialUpdateMedication(partialUpdateMedicationUsecase);
const softDeleteMedication = medicationController.softDeleteMedication(softDeleteMedicationUsecase);
const softDeleteManyMedication = medicationController.softDeleteManyMedication(softDeleteManyMedicationUsecase);
const bulkInsertMedication = medicationController.bulkInsertMedication(bulkInsertMedicationUsecase);
const bulkUpdateMedication = medicationController.bulkUpdateMedication(bulkUpdateMedicationUsecase);
const deleteMedication = medicationController.deleteMedication(deleteMedicationUsecase);
const deleteManyMedication = medicationController.deleteManyMedication(deleteManyMedicationUsecase);

module.exports = {
  addMedication,
  findAllMedication,
  getMedicationCount,
  getMedicationById,
  updateMedication,
  partialUpdateMedication,
  softDeleteMedication,
  softDeleteManyMedication,
  bulkInsertMedication,
  bulkUpdateMedication,
  deleteMedication,
  deleteManyMedication,
};