module.exports = (patient) => {

  let newPatient = { 
    name: patient.name,
    code: patient.code,
    email: patient.email,
    isActive: patient.isActive,
    isDelete: patient.isDelete,
    createdAt: patient.createdAt,
    updatedAt: patient.updatedAt,
    addedBy: patient.addedBy,
    updatedBy: patient.updatedBy,
    isDeleted: patient.isDeleted,
  };

  // remove undefined values
  Object.keys(newPatient).forEach(key => newPatient[key] === undefined && delete newPatient[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newPatient) => {
   *   if (!newPatient.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newPatient) 
   */

  return Object.freeze(newPatient);
};
