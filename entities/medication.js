module.exports = (medication) => {

  let newMedication = { 
    code: medication.code,
    name: medication.name,
    strength: medication.strength,
    unit: medication.unit,
    medForm: medication.medForm,
    mfgName: medication.mfgName,
    isActive: medication.isActive,
    isDelete: medication.isDelete,
    createdAt: medication.createdAt,
    updatedAt: medication.updatedAt,
    addedBy: medication.addedBy,
    updatedBy: medication.updatedBy,
    isDeleted: medication.isDeleted,
  };

  // remove undefined values
  Object.keys(newMedication).forEach(key => newMedication[key] === undefined && delete newMedication[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newMedication) => {
   *   if (!newMedication.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newMedication) 
   */

  return Object.freeze(newMedication);
};
