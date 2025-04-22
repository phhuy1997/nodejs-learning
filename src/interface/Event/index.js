// Define the structure for EventSF
export const EventSF = {
  Id: undefined,
  Image_Url__c: '',
  Name: '',
  Status__c: '',
  Distances__c: undefined,
  Event_Location__c: '',
  Event_Date__c: '',
  Register_Start_Date__c: undefined,
  Register_End_Date__c: undefined,
  Charity_Ids__c: undefined,
  Description__c: '',
};

// Define the structure for EventInternal
export const EventInternal = {
  id: undefined,
  imageUrl: '',
  name: '',
  status: '',
  distances: undefined,
  eventLocation: '',
  eventDate: '',
  registerStartDate: undefined,
  registerEndDate: undefined,
  charityIds: '',
  description: '',
};

// Mapped fields between EventSF and EventInternal
export const mappedEvent = {
  Id: "id",
  Image_Url__c: "imageUrl",
  Name: "name",
  Status__c: "status",
  Distances__c: "distances",
  Event_Location__c: "eventLocation",
  Event_Date__c: "eventDate",
  Register_Start_Date__c: "registerStartDate",
  Register_End_Date__c: "registerEndDate",
  Charity_Ids__c: "charityIds",
  Description__c: "description",
};
