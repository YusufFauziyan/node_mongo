const encounterDb = require('../../../../data-access/encounterDb');
const noteDb = require('../../../../data-access/noteDb');

const encounterSchema = require('../../../../validation/schema/encounter');

const createValidation = require('../../../../validation')(encounterSchema.createSchema);
const updateValidation = require('../../../../validation')(encounterSchema.updateSchema);
const filterValidation = require('../../../../validation')(encounterSchema.filterValidationSchema);
const addEncounterUsecase = require('../../../../use-case/encounter/addEncounter')({
  encounterDb,
  createValidation 
});
const findAllEncounterUsecase = require('../../../../use-case/encounter/findAllEncounter')({
  encounterDb,
  filterValidation
});
const getEncounterCountUsecase = require('../../../../use-case/encounter/getEncounterCount')({
  encounterDb,
  filterValidation
});
const getEncounterUsecase = require('../../../../use-case/encounter/getEncounter')({
  encounterDb,
  filterValidation
});
const updateEncounterUsecase = require('../../../../use-case/encounter/updateEncounter')({
  encounterDb,
  updateValidation 
});
const partialUpdateEncounterUsecase = require('../../../../use-case/encounter/partialUpdateEncounter')({ encounterDb });
const softDeleteEncounterUsecase = require('../../../../use-case/encounter/softDeleteEncounter')({
  encounterDb,
  noteDb
});
const softDeleteManyEncounterUsecase = require('../../../../use-case/encounter/softDeleteManyEncounter')({
  encounterDb,
  noteDb
});
const bulkInsertEncounterUsecase = require('../../../../use-case/encounter/bulkInsertEncounter')({ encounterDb });
const bulkUpdateEncounterUsecase = require('../../../../use-case/encounter/bulkUpdateEncounter')({ encounterDb });
const deleteEncounterUsecase = require('../../../../use-case/encounter/deleteEncounter')({
  encounterDb,
  noteDb
});
const deleteManyEncounterUsecase = require('../../../../use-case/encounter/deleteManyEncounter')({
  encounterDb,
  noteDb
});

const encounterController = require('./encounter');

const addEncounter = encounterController.addEncounter(addEncounterUsecase);
const findAllEncounter = encounterController.findAllEncounter(findAllEncounterUsecase);
const getEncounterCount = encounterController.getEncounterCount(getEncounterCountUsecase);
const getEncounterById = encounterController.getEncounter(getEncounterUsecase);
const updateEncounter = encounterController.updateEncounter(updateEncounterUsecase);
const partialUpdateEncounter = encounterController.partialUpdateEncounter(partialUpdateEncounterUsecase);
const softDeleteEncounter = encounterController.softDeleteEncounter(softDeleteEncounterUsecase);
const softDeleteManyEncounter = encounterController.softDeleteManyEncounter(softDeleteManyEncounterUsecase);
const bulkInsertEncounter = encounterController.bulkInsertEncounter(bulkInsertEncounterUsecase);
const bulkUpdateEncounter = encounterController.bulkUpdateEncounter(bulkUpdateEncounterUsecase);
const deleteEncounter = encounterController.deleteEncounter(deleteEncounterUsecase);
const deleteManyEncounter = encounterController.deleteManyEncounter(deleteManyEncounterUsecase);

module.exports = {
  addEncounter,
  findAllEncounter,
  getEncounterCount,
  getEncounterById,
  updateEncounter,
  partialUpdateEncounter,
  softDeleteEncounter,
  softDeleteManyEncounter,
  bulkInsertEncounter,
  bulkUpdateEncounter,
  deleteEncounter,
  deleteManyEncounter,
};