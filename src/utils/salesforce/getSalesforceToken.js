import axios from 'axios'


const getSalesforceToken = async () => {
	console.log('process.env.AUTH_SF_API_URL :>> ', process.env.AUTH_SF_API_URL);
	console.log('process.env.SF_CLIENT_ID :>> ', process.env.SF_CLIENT_ID);
	console.log('process.env.SF_CLIENT_SECRET :>> ', process.env.SF_CLIENT_SECRET);
	console.log('process.env.SF_USERNAME :>> ', process.env.SF_USERNAME);
	console.log('SF_PASSWORD_AND_TOKEN :>> ', process.env.SF_PASSWORD_AND_TOKEN);
  try {
    const response = await axios.post(
      process.env.AUTH_SF_API_URL,
      new URLSearchParams({
        grant_type: 'password',
        client_id: process.env.SF_CLIENT_ID,
        client_secret: process.env.SF_CLIENT_SECRET,
        username: process.env.SF_USERNAME,
        password: process.env.SF_PASSWORD_AND_TOKEN,
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );
		console.log('response PHN :>> ', response);
    const accessToken = response.data.access_token;
    return accessToken;
  } catch (error) {
    console.error('Error getting Salesforce token:', error.response?.data || error.message);
    throw new Error('Salesforce authentication failed');
  }
};

export default getSalesforceToken;
