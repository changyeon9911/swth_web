import axios from "axios";
import { SLACK_API_TOKEN } from "./config";


const slackNotify = async(channel, text) => {
    const params = new URLSearchParams()
    params.append("token", SLACK_API_TOKEN);
    params.append("channel", channel);
    params.append("text", text);
    const config = {    
        headers: {
            "Content-type": "application/x-www-form-urlencoded",
        }
    };
    const url = "https://slack.com/api/chat.postMessage"
    const response = await axios.post(url, params, config); 
    if (response.data) {
        return console.log(response.data); 
    } else {
        return console.log("error occured");
    }
};

export default slackNotify;


