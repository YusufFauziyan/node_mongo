const response = require('../../utils/response');

const getDependencyCount = ({
  encounterDb,noteDb
})=> async (filter) =>{
  let encounter = await encounterDb.findMany(filter);
  if (encounter.length){
    let encounterIds = encounter.map((obj) => obj.id);

    const noteFilter = { '$or': [{ encounterId : { '$in' : encounterIds } }] };
    const noteCnt =  await noteDb.count(noteFilter);
    let result = { note :noteCnt , };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  encounter : 0 }
    });
  }
};

const deleteWithDependency = ({
  encounterDb,noteDb
})=> async (filter) =>{
  let encounter = await encounterDb.findMany(filter);
  if (encounter.length){
    let encounterIds = encounter.map((obj) => obj.id);

    const noteFilter = { '$or': [{ encounterId : { '$in' : encounterIds } }] };
    const noteCnt =  (await noteDb.deleteMany(noteFilter));
    let deleted = (await encounterDb.deleteMany(filter));
    let result = { note :noteCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  encounter : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  encounterDb,noteDb
}) => async (filter,updateBody) =>{
  let encounter = await encounterDb.findMany(filter);
  if (encounter.length){
    let encounterIds = encounter.map((obj) => obj.id);

    const noteFilter = { '$or': [{ encounterId : { '$in' : encounterIds } }] };
    const noteCnt =  (await noteDb.updateMany(noteFilter,updateBody));
    let updated = (await encounterDb.updateMany(filter,updateBody));
    let result = { note :noteCnt , };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  encounter : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
