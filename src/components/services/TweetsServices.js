import axios from 'axios'

class TweetsServices
{  
     
    async getGemTweets()
    { 
        return await axios.get("http://localhost:5000/api/getTweets/gem");
    }

    async getResourcesTweets()
    { 
        return await axios.get("http://localhost:5000/api/getTweets/resources");
    }

    async getRandomTweets()
    { 
        return await axios.get("http://localhost:5000/api/getTweets/random");
    }
}

export default new TweetsServices();