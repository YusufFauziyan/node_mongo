const EventDb = require('../../../data-access/EventDb');

const EventSchema = require('../../../validation/schema/Event');

const createValidation = require('../../../validation')(EventSchema.createSchema);
const updateValidation = require('../../../validation')(EventSchema.updateSchema);
const filterValidation = require('../../../validation')(EventSchema.filterValidationSchema);
const addEventUsecase = require('../../../use-case/Event/addEvent')({
  EventDb,
  createValidation 
});
const findAllEventUsecase = require('../../../use-case/Event/findAllEvent')({
  EventDb,
  filterValidation
});
const getEventCountUsecase = require('../../../use-case/Event/getEventCount')({
  EventDb,
  filterValidation
});
const getEventUsecase = require('../../../use-case/Event/getEvent')({
  EventDb,
  filterValidation
});
const updateEventUsecase = require('../../../use-case/Event/updateEvent')({
  EventDb,
  updateValidation 
});
const partialUpdateEventUsecase = require('../../../use-case/Event/partialUpdateEvent')({ EventDb });
const softDeleteEventUsecase = require('../../../use-case/Event/softDeleteEvent')({ EventDb });
const softDeleteManyEventUsecase = require('../../../use-case/Event/softDeleteManyEvent')({ EventDb });
const bulkInsertEventUsecase = require('../../../use-case/Event/bulkInsertEvent')({ EventDb });
const bulkUpdateEventUsecase = require('../../../use-case/Event/bulkUpdateEvent')({ EventDb });
const deleteEventUsecase = require('../../../use-case/Event/deleteEvent')({ EventDb });
const deleteManyEventUsecase = require('../../../use-case/Event/deleteManyEvent')({ EventDb });

const EventController = require('./Event');

const addEvent = EventController.addEvent(addEventUsecase);
const findAllEvent = EventController.findAllEvent(findAllEventUsecase);
const getEventCount = EventController.getEventCount(getEventCountUsecase);
const getEventById = EventController.getEvent(getEventUsecase);
const updateEvent = EventController.updateEvent(updateEventUsecase);
const partialUpdateEvent = EventController.partialUpdateEvent(partialUpdateEventUsecase);
const softDeleteEvent = EventController.softDeleteEvent(softDeleteEventUsecase);
const softDeleteManyEvent = EventController.softDeleteManyEvent(softDeleteManyEventUsecase);
const bulkInsertEvent = EventController.bulkInsertEvent(bulkInsertEventUsecase);
const bulkUpdateEvent = EventController.bulkUpdateEvent(bulkUpdateEventUsecase);
const deleteEvent = EventController.deleteEvent(deleteEventUsecase);
const deleteManyEvent = EventController.deleteManyEvent(deleteManyEventUsecase);

module.exports = {
  addEvent,
  findAllEvent,
  getEventCount,
  getEventById,
  updateEvent,
  partialUpdateEvent,
  softDeleteEvent,
  softDeleteManyEvent,
  bulkInsertEvent,
  bulkUpdateEvent,
  deleteEvent,
  deleteManyEvent,
};