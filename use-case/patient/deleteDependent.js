const response = require('../../utils/response');

const getDependencyCount = ({
  patientDb,orderDb
})=> async (filter) =>{
  let patient = await patientDb.findMany(filter);
  if (patient.length){
    let patientIds = patient.map((obj) => obj.id);

    const orderFilter = { '$or': [{ patientId : { '$in' : patientIds } }] };
    const orderCnt =  await orderDb.count(orderFilter);
    let result = { order :orderCnt , };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  patient : 0 }
    });
  }
};

const deleteWithDependency = ({
  patientDb,orderDb
})=> async (filter) =>{
  let patient = await patientDb.findMany(filter);
  if (patient.length){
    let patientIds = patient.map((obj) => obj.id);

    const orderFilter = { '$or': [{ patientId : { '$in' : patientIds } }] };
    const orderCnt =  (await orderDb.deleteMany(orderFilter));
    let deleted = (await patientDb.deleteMany(filter));
    let result = { order :orderCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  patient : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  patientDb,orderDb
}) => async (filter,updateBody) =>{
  let patient = await patientDb.findMany(filter);
  if (patient.length){
    let patientIds = patient.map((obj) => obj.id);

    const orderFilter = { '$or': [{ patientId : { '$in' : patientIds } }] };
    const orderCnt =  (await orderDb.updateMany(orderFilter,updateBody));
    let updated = (await patientDb.updateMany(filter,updateBody));
    let result = { order :orderCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  patient : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
