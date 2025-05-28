// Define the structure for EventSF
export const CharitySF = {
	Id: '',
	Code__c: '',
	Image_Url__c: '',
	Name: '',
	Purpose__c: '',
	Message__c: '',
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
	purpose: '',
	message: '',
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
	Code__c: 'code',
	Name: 'name',
	Purpose__c: 'purpose',
	Message__c: 'message',
	Description__c: 'description',
	Email__c: 'email',
	Has_Connectted_Stripe__c: 'isConnectedStripe',
	Phone_Number__c: 'phoneNumber'
};
