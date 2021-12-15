import * as config from "./config";
import axios from "axios";

const verifyEmail = async (email) => {
    const options = {
        method: 'GET',
        url: config.EMAIL_VERIFICATION_URL,
        params: {email: email},
        headers: {
        'x-rapidapi-host': config.EMAIL_VERIFICATION_HOST,
        'x-rapidapi-key': config.EMAIL_VERIFICATION_KEY,
        }
    };
    console.log(options);
    const response = await axios(options); 
    if (response.data) {
        return response.data.status; 
    } else {
        return false;
    }
};

export default verifyEmail;