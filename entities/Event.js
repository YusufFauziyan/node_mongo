module.exports = (Event) => {

  let newEvent = { 
    name: Event.name,
    description: Event.description,
    address: Event.address,
    startDateTime: Event.startDateTime,
    endDateTime: Event.endDateTime,
    speakers: Event.speakers,
    organizer: Event.organizer,
    image: Event.image,
    attachments: Event.attachments,
    isActive: Event.isActive,
    createdAt: Event.createdAt,
    updatedAt: Event.updatedAt,
    updatedBy: Event.updatedBy,
    addedBy: Event.addedBy,
    isDeleted: Event.isDeleted,
  };

  // remove undefined values
  Object.keys(newEvent).forEach(key => newEvent[key] === undefined && delete newEvent[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newEvent) => {
   *   if (!newEvent.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newEvent) 
   */

  return Object.freeze(newEvent);
};
