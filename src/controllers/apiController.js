import connection from "../config/database.js";

import axios from 'axios'
import getSalesforceToken from "../utils/salesforce/getSalesforceToken.js";
import { mapSFAndInternalField } from "../utils/salesforce/mapSFAndinternalField.js";
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
    // const token = "00D5i00000DWTNL!ARUAQCsbnXmekoItxqUJhEWBP0c7I3OqD6Irnf78lA9fXiGjyCw0gnBxW4yVQG_MLGretvpw8OwKjcvkaRCntAVpOcVPkgkU";

		console.log('token :>> ', token);

    const response = await axios.get(
			"https://datahouse-5d-dev-ed.develop.my.salesforce.com/services/data/v59.0/query",
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

export const getAllCharities = async (req, res) => {
	try {
    const token = await getSalesforceToken();
    // const token = "00D5i00000DWTNL!ARUAQCsbnXmekoItxqUJhEWBP0c7I3OqD6Irnf78lA9fXiGjyCw0gnBxW4yVQG_MLGretvpw8OwKjcvkaRCntAVpOcVPkgkU";

		console.log('token :>> ', token);

    const response = await axios.get(
			"https://datahouse-5d-dev-ed.develop.my.salesforce.com/services/data/v59.0/query",
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
export const getAllDistances = async (req, res) => {
	// TO DO: procress data, call Model, ...
	try {
    // const token = await getSalesforceToken();
    const token = "00D5i00000DWTNL!ARUAQHGHrUhgRHXEpixzJ8v1xSzBQPvLx.8CQHMVnzn276H2M7uS6EMOh_1w6F0l7lNx2MecvUcTL3xxftTNrWo294I37nZZ";

		console.log('token :>> ', token);

    const response = await axios.get(
			"https://datahouse-5d-dev-ed.develop.my.salesforce.com/services/data/v59.0/query",
      {
				headers: {
					Authorization: `Bearer ${token}`,
				},
				params: {
					q: "SELECT Id, Name FROM Distance__c"
				},
			}
    );

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching distances:', error.response?.data || error.message);
    res.status(500).send('Failed to fetch distances');
  }
};




// // GRAPHQL way:
// export const getAllEvents = () => {
//   return new Promise((resolve, reject) => {
//     connection.query('SELECT * FROM Event', (err, results) => {
//       if (err) reject(err);
//       else resolve(results);
//     });
//   });
// };
