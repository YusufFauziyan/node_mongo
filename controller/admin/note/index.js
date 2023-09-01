const noteDb = require('../../../data-access/noteDb');

const noteSchema = require('../../../validation/schema/note');

const createValidation = require('../../../validation')(noteSchema.createSchema);
const updateValidation = require('../../../validation')(noteSchema.updateSchema);
const filterValidation = require('../../../validation')(noteSchema.filterValidationSchema);
const addNoteUsecase = require('../../../use-case/note/addNote')({
  noteDb,
  createValidation 
});
const findAllNoteUsecase = require('../../../use-case/note/findAllNote')({
  noteDb,
  filterValidation
});
const getNoteCountUsecase = require('../../../use-case/note/getNoteCount')({
  noteDb,
  filterValidation
});
const getNoteUsecase = require('../../../use-case/note/getNote')({
  noteDb,
  filterValidation
});
const updateNoteUsecase = require('../../../use-case/note/updateNote')({
  noteDb,
  updateValidation 
});
const partialUpdateNoteUsecase = require('../../../use-case/note/partialUpdateNote')({ noteDb });
const softDeleteNoteUsecase = require('../../../use-case/note/softDeleteNote')({ noteDb });
const softDeleteManyNoteUsecase = require('../../../use-case/note/softDeleteManyNote')({ noteDb });
const bulkInsertNoteUsecase = require('../../../use-case/note/bulkInsertNote')({ noteDb });
const bulkUpdateNoteUsecase = require('../../../use-case/note/bulkUpdateNote')({ noteDb });
const deleteNoteUsecase = require('../../../use-case/note/deleteNote')({ noteDb });
const deleteManyNoteUsecase = require('../../../use-case/note/deleteManyNote')({ noteDb });

const noteController = require('./note');

const addNote = noteController.addNote(addNoteUsecase);
const findAllNote = noteController.findAllNote(findAllNoteUsecase);
const getNoteCount = noteController.getNoteCount(getNoteCountUsecase);
const getNoteById = noteController.getNote(getNoteUsecase);
const updateNote = noteController.updateNote(updateNoteUsecase);
const partialUpdateNote = noteController.partialUpdateNote(partialUpdateNoteUsecase);
const softDeleteNote = noteController.softDeleteNote(softDeleteNoteUsecase);
const softDeleteManyNote = noteController.softDeleteManyNote(softDeleteManyNoteUsecase);
const bulkInsertNote = noteController.bulkInsertNote(bulkInsertNoteUsecase);
const bulkUpdateNote = noteController.bulkUpdateNote(bulkUpdateNoteUsecase);
const deleteNote = noteController.deleteNote(deleteNoteUsecase);
const deleteManyNote = noteController.deleteManyNote(deleteManyNoteUsecase);

module.exports = {
  addNote,
  findAllNote,
  getNoteCount,
  getNoteById,
  updateNote,
  partialUpdateNote,
  softDeleteNote,
  softDeleteManyNote,
  bulkInsertNote,
  bulkUpdateNote,
  deleteNote,
  deleteManyNote,
};