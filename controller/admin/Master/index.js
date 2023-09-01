const MasterDb = require('../../../data-access/MasterDb');

const MasterSchema = require('../../../validation/schema/Master');

const createValidation = require('../../../validation')(MasterSchema.createSchema);
const updateValidation = require('../../../validation')(MasterSchema.updateSchema);
const filterValidation = require('../../../validation')(MasterSchema.filterValidationSchema);
const addMasterUsecase = require('../../../use-case/Master/addMaster')({
  MasterDb,
  createValidation 
});
const findAllMasterUsecase = require('../../../use-case/Master/findAllMaster')({
  MasterDb,
  filterValidation
});
const getMasterCountUsecase = require('../../../use-case/Master/getMasterCount')({
  MasterDb,
  filterValidation
});
const getMasterUsecase = require('../../../use-case/Master/getMaster')({
  MasterDb,
  filterValidation
});
const updateMasterUsecase = require('../../../use-case/Master/updateMaster')({
  MasterDb,
  updateValidation 
});
const partialUpdateMasterUsecase = require('../../../use-case/Master/partialUpdateMaster')({ MasterDb });
const softDeleteMasterUsecase = require('../../../use-case/Master/softDeleteMaster')({ MasterDb });
const softDeleteManyMasterUsecase = require('../../../use-case/Master/softDeleteManyMaster')({ MasterDb });
const bulkInsertMasterUsecase = require('../../../use-case/Master/bulkInsertMaster')({ MasterDb });
const bulkUpdateMasterUsecase = require('../../../use-case/Master/bulkUpdateMaster')({ MasterDb });
const deleteMasterUsecase = require('../../../use-case/Master/deleteMaster')({ MasterDb });
const deleteManyMasterUsecase = require('../../../use-case/Master/deleteManyMaster')({ MasterDb });

const MasterController = require('./Master');

const addMaster = MasterController.addMaster(addMasterUsecase);
const findAllMaster = MasterController.findAllMaster(findAllMasterUsecase);
const getMasterCount = MasterController.getMasterCount(getMasterCountUsecase);
const getMasterById = MasterController.getMaster(getMasterUsecase);
const updateMaster = MasterController.updateMaster(updateMasterUsecase);
const partialUpdateMaster = MasterController.partialUpdateMaster(partialUpdateMasterUsecase);
const softDeleteMaster = MasterController.softDeleteMaster(softDeleteMasterUsecase);
const softDeleteManyMaster = MasterController.softDeleteManyMaster(softDeleteManyMasterUsecase);
const bulkInsertMaster = MasterController.bulkInsertMaster(bulkInsertMasterUsecase);
const bulkUpdateMaster = MasterController.bulkUpdateMaster(bulkUpdateMasterUsecase);
const deleteMaster = MasterController.deleteMaster(deleteMasterUsecase);
const deleteManyMaster = MasterController.deleteManyMaster(deleteManyMasterUsecase);

module.exports = {
  addMaster,
  findAllMaster,
  getMasterCount,
  getMasterById,
  updateMaster,
  partialUpdateMaster,
  softDeleteMaster,
  softDeleteManyMaster,
  bulkInsertMaster,
  bulkUpdateMaster,
  deleteMaster,
  deleteManyMaster,
};