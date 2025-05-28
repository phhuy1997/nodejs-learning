import connection from "../config/database.js";

import axios from 'axios'
import getSalesforceToken from "../utils/salesforce/getSalesforceToken.js";
import { mapInternalToSFField, mapSFAndInternalField } from "../utils/salesforce/mapSFAndinternalField.js";
import { mappedEvent } from "../interface/Event/index.js";
import { mappedCharity } from "../interface/Charity/index.js";


export const getAllUsers = (req, res) => {
	// TO DO: procress data, call Model, ...
	connection.query(
		'SELECT * FROM Users',
		function (err, results, fields) {
			return res.status(200).json({
				message: 'ok',
				data: results
			})
  	}
	)
}

// RESTFUL way:
export const getAllEvents = async (req, res) => {
	try {
    const token = await getSalesforceToken();

		console.log('token :>> ', token);

    const response = await axios.get(
			`${process.env.BASE_SF_API_URL}/query`,
      {
				headers: {
					Authorization: `Bearer ${token}`,
				},
				params: {
					q: "SELECT FIELDS(ALL) FROM Run_Event__c LIMIT 100"
				},
			}
    );

		const mappedResponse = mapSFAndInternalField(
			response.data.records,
			mappedEvent
		);

    res.json(mappedResponse);
  } catch (error) {
    console.error('Error fetching events:', error.response?.data || error.message);
    res.status(500).send('Failed to fetch events');
  }
}



export const addEvent = async (req, res) => {
	try {
		const token = await getSalesforceToken();
		console.log('token :>> ', token);
		
		const eventData = req.body; // typeof EventInternal
		// need to convert to typeof EventSF before sending
		const { Id, ...eventDataSFWithoutId } = mapInternalToSFField(eventData, mappedEvent);
		console.log('eventDataSFWithoutId :>> ', eventDataSFWithoutId);
		
		const payload = { 
			...eventDataSFWithoutId, 
			Distances__c: eventDataSFWithoutId.Distances__c ? JSON.stringify(eventDataSFWithoutId.Distances__c) : null,
			Charity_Ids__c: eventDataSFWithoutId.Charity_Ids__c ? JSON.stringify(eventDataSFWithoutId.Charity_Ids__c) : null }
		console.log('payload :>> ', payload);
		console.log('${process.env.BASE_SF_INSTANCE_URL}/sobjects/Run_Event__c :>> ', `${process.env.BASE_SF_API_URL}/sobjects/Run_Event__c`);

		const response = await axios.post(
      `${process.env.BASE_SF_API_URL}/sobjects/Run_Event__c`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

		res.status(201).json({
      message: 'Event created successfully',
      id: response.data.id,
    });
  } catch (error) {
    console.error('Error post to Salesforce:', error.response?.data || error.message);
    throw new Error('Post to Salesforce failed');
  }
};


export const updateEvent = async (req, res) => {
  try {
    const token = await getSalesforceToken();
    console.log('token :>> ', token);
		const { id } = req.params;

    const eventData = req.body; // typeof EventInternal

		const eventDataSF = mapInternalToSFField(eventData, mappedEvent)

    if (!id) {
      return res.status(400).json({ message: 'Missing Salesforce record Id for update' });
    }

    const payload = {
      ...eventDataSF,
      Distances__c: eventDataSF.Distances__c
        ? JSON.stringify(eventDataSF.Distances__c)
        : null,
      Charity_Ids__c: eventDataSF.Charity_Ids__c
        ? JSON.stringify(eventDataSF.Charity_Ids__c)
        : null,
    };

		console.log('payload :>> ', payload);

    const url = `${process.env.BASE_SF_API_URL}/sobjects/Run_Event__c/${id}`;
    console.log('PATCH URL :>> ', url);

    await axios.patch(url, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    res.status(200).json({
      message: 'Event updated successfully',
    });
  } catch (error) {
    console.error('Error updating Salesforce event:', error.response?.data || error.message);
    res.status(500).json({ message: 'Update to Salesforce failed' });
  }
};

export const getAllCharities = async (req, res) => {
	try {
		const token = await getSalesforceToken();

		console.log('token :>> ', token);

		const response = await axios.get(
			`${process.env.BASE_SF_API_URL}/query`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
				params: {
					q: "SELECT FIELDS(ALL) FROM Charity__c LIMIT 100"
				},
			}
		);

		const mappedResponse = mapSFAndInternalField(
			response.data.records,
			mappedCharity
		);

		res.json(mappedResponse);
	} catch (error) {
		console.error('Error fetching events:', error.response?.data || error.message);
		res.status(500).send('Failed to fetch events');
	}
}

export const addCharity = async (req, res) => {
	try {
		const token = await getSalesforceToken();
		console.log('token :>> ', token);
		
		const charityData = req.body; // typeof CharityInternal
		// need to convert to typeof CharitySF before sending
		const { Id, Code__c, ...charityDataSFWithoutIdAndCode } = mapInternalToSFField(charityData, mappedCharity);
		console.log('charityDataSFWithoutIdAndCode :>> ', charityDataSFWithoutIdAndCode);
		
		const payload = { 
			...charityDataSFWithoutIdAndCode, 
			Has_Connectted_Stripe__c: charityDataSFWithoutIdAndCode.Has_Connectted_Stripe__c ?? 'false',
		 }
		console.log('payload :>> ', payload);

		const response = await axios.post(
      `${process.env.BASE_SF_API_URL}/sobjects/Charity__c`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

		res.status(201).json({
      message: 'Charity created successfully',
      id: response.data.id,
    });
  } catch (error) {
    console.error('Error post to Salesforce:', error.response?.data || error.message);
    throw new Error('Post to Salesforce failed');
  }
};

export const updateCharity = async (req, res) => {
  try {
    const token = await getSalesforceToken();
    console.log('token :>> ', token);
		const { id } = req.params;

    const charityData = req.body; // typeof CharityInternal
		
		const charityDataSF = mapInternalToSFField(charityData, mappedCharity)
		console.log('charityDataSF :>> ', charityDataSF);

		const {Id, Code__c, ...charityDataSFWithoutId} = charityDataSF;

    if (!id) {
      return res.status(400).json({ message: 'Missing Salesforce record Id for update' });
    }

    const payload = {
      ...charityDataSFWithoutId,
			Has_Connectted_Stripe__c: charityDataSF.Has_Connectted_Stripe__c ? JSON.stringify(charityDataSF.Has_Connectted_Stripe__c) : 'false',
    };

		console.log('payload :>> ', payload);

    const url = `${process.env.BASE_SF_API_URL}/sobjects/Charity__c/${id}`;
    console.log('PATCH URL :>> ', url);

    await axios.patch(url, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    res.status(200).json({
      message: 'Event updated successfully',
    });
  } catch (error) {
    console.error('Error updating Salesforce charity:', error.response?.data || error.message);
    res.status(500).json({ message: 'Update to Salesforce failed' });
  }
};
