// Define the structure for EventSF
export const CharitySF = {
	Id: '',
	Image_Url__c: '',
	Name: '',
	Description__c: '',
	Email__c: '',
	Has_Connectted_Stripe__c: false,
	Phone_Number__c: ''

};

// Define the structure for EventInternal
export const CharityInternal = {
	id: '',
  code: '',
  name: '',
  description: undefined,
  email: '',
  phoneNumber: '',
  imageUrl: undefined,
  isConnectedStripe: false,
};

// Mapped fields between EventSF and EventInternal
export const mappedCharity = {
	Id: 'id',
	Image_Url__c: 'imageUrl',
	Name: 'name',
	Description__c: 'description',
	Email__c: 'email',
	Has_Connectted_Stripe__c: 'isConnectedStripe',
	Phone_Number__c: 'phoneNumber'
};
