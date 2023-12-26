# Auto-Tweeter

## Description

This is a simple Node.js script that automates tweeting using the Twitter API. It reads tweet content from a file (`tweets.txt`) and posts them on a specified Twitter account at scheduled intervals. The script uses the `twitter-api-v2` library for interacting with the Twitter API.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/saadtahir995/auto-tweeter.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Twitter API keys and tokens. You can obtain these keys by creating a Twitter Developer account and setting up a Twitter App. Follow the steps below:

   - Go to [Twitter Developer Portal](https://developer.twitter.com/en/apps) and log in with your Twitter account.
   - Create a new App and fill in the required information.
   - Once your App is created, go to the "Keys and tokens" tab to find your API key, API secret key, Access token, and Access token secret.
   - Add these values to your `.env` file:

     ```env
     API_KEY=your_api_key
     API_SEC=your_api_secret_key
     ACCESS_TOKEN=your_access_token
     ACCESS_SECRET=your_access_token_secret
     ```

4. Populate the `tweets.txt` file with the tweets you want to post, each on a new line.

5. Adjust the delay between tweets by modifying the `delay` variable in the script (default is 1 minute).

## Usage

Run the script using:

```bash
npm start
```

This will start posting tweets based on the content of `tweets.txt` at the specified intervals.

## Customization

- You can customize the tweet delay by changing the `delay` variable in the script.
- Modify the `tweets.txt` file to include your desired tweet content.

## Important Note

Make sure you are compliant with Twitter's API usage policies to avoid any issues with your Twitter account.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
