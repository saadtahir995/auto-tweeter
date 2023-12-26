import { TwitterApi } from 'twitter-api-v2';
import fs from 'fs';
import 'dotenv/config'

// Instantiate with desired auth type (here's Bearer v2 auth)
const userClient = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_SEC,
  // Following access tokens are not required if you are
  // at part 1 of user-auth process (ask for a request token)
  // or if you want a app-only client (see below)
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET,
});

const rwClient = userClient.readWrite
const getcurrentuser=()=>{
  rwClient.currentUserV2().then((user) => {console.log(user)});
}
const tweets = fs.readFileSync('tweets.txt', 'utf-8').split('\n').filter(Boolean);

const tweet=(tweet_text)=>{
  rwClient.v2.tweet(tweet_text).then((tweet) => {
    console.log(tweet);
  });
}
tweets.forEach((tweet_text,index) => {
  // delay of 2 minutes
  const delay = index * 1 * 60 * 1000; // 1 hour in milliseconds
  setTimeout(() => {
    tweet(tweet_text);
  }, delay);
});



