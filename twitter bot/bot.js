import { TwitterApi } from 'twitter-api-v2';
import fs from 'fs';

// Instantiate with desired auth type (here's Bearer v2 auth)
const userClient = new TwitterApi({
  appKey: 'XLMT9tcGER6LSV3hnqyo1omqJ',
  appSecret: 'NkaoI9xHXJ9g2gcai2bTjDUnaHnEMXxMFPRMRpko3nN06lADfZ',
  // Following access tokens are not required if you are
  // at part 1 of user-auth process (ask for a request token)
  // or if you want a app-only client (see below)
  accessToken: '4170446783-y9qPkhzy3UkLrIW4uGmAomnNC8QBjzJswdBenOC',
  accessSecret: '27Zajn9oHxBSDxlBLINLjocmWcNZjCFxyBiQ3M12J2sHg',
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
  const delay = index * 2 * 60 * 1000; // 2 minutes in milliseconds
  setTimeout(() => {
    tweet(tweet_text);
  }, delay);
});



