let express = require("express");
var Twitter = require('twitter');
require('dotenv').config()
const cors = require('cors')



var client = new Twitter({
    consumer_key: `${ process.env.REACT_APP_CONSUMER_KEY}`,
     consumer_secret: `${ process.env.REACT_APP_CONSUMER_SECRET}`,
    bearer_token: `${ process.env.REACT_APP_TWITTER_BEARER_TOKEN}`
});
 


let app = express();
let port = process.env.port || 5000;
let router = express.Router();
app.use(cors())
app.use("/api/getTweets", router);

app.listen(port, () => {
	console.log(`Node.js application running on port : ${port}`);
});


router.get("/gem", (req, res) => {

  client.get("https://api.twitter.com/2/tweets/search/recent?query=(from:AnkurWarikooBot OR from:Kunal_Shah_Bot OR from:kunalb11 OR from:BehereBaba OR from:BeingPractical)&max_results=10&tweet.fields=author_id,created_at,source&user.fields=username,url", function(error, tweets, response) {
    if(!error)
    {
    res.json(tweets);
    }
    else
    {
    console.log(error);
    res.json(error);
    }
 });
});
	
router.get("/resources", (req, res) => {

  client.get("https://api.twitter.com/2/tweets/search/recent?query=(from:the_OmPande OR from:CodingMaster6 OR from:ThePracticalDev OR from:IndieHackers )&max_results=15&tweet.fields=author_id,created_at,source&user.fields=username,url", function(error, tweets, response) {
    if(!error)
    {
    res.json(tweets);
    }
    else
    {
    console.log(error);
    res.json(error);
    }
 });
});

router.get("/random", (req, res) => {

  client.get("https://api.twitter.com/2/tweets/search/recent?query=(from:MotivationalMsg OR from:BeerBicepsGuy OR from:join2manish OR from:AbhyudayaMohan)&max_results=25&tweet.fields=author_id,created_at,source&user.fields=username,url", function(error, tweets, response) {
    if(!error)
    {
    res.json(tweets);
    }
    else
    {
    console.log(error);
    res.json(error);
    }
 });
});
