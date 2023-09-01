module.exports = (encounter) => {

  let newEncounter = { 
    name: encounter.name,
    date: encounter.date,
    description: encounter.description,
    isActive: encounter.isActive,
    isDelete: encounter.isDelete,
    patientId: encounter.patientId,
    createdAt: encounter.createdAt,
    updatedAt: encounter.updatedAt,
    addedBy: encounter.addedBy,
    updatedBy: encounter.updatedBy,
    isDeleted: encounter.isDeleted,
  };

  // remove undefined values
  Object.keys(newEncounter).forEach(key => newEncounter[key] === undefined && delete newEncounter[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newEncounter) => {
   *   if (!newEncounter.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newEncounter) 
   */

  return Object.freeze(newEncounter);
};
