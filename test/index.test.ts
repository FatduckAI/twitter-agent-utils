import dotenv from "dotenv";
import { readFileSync } from "fs";
import { TwitterClient } from "../src/client";

dotenv.config();

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function testCookieAuth() {
  // get from json file
  const cookiesString = readFileSync("./test/cookies.json", "utf8");
  const cookiesArray = JSON.parse(cookiesString); // Parse JSON to an array

  if (!Array.isArray(cookiesArray)) {
    console.error("Cookies JSON is not in the expected format (array).");
    return;
  }

  const client = await TwitterClient.createWithCookies(cookiesArray);

  // Test sending a tweet
  /* console.log("Testing sendTweet()...");
  const tweet = await client.sendTweet(`Hello! ${new Date().toISOString()} `);
  console.log("Tweeted:", tweet);
  sleep(2000);
  // Test getting a tweet
  console.log("Testing getTweet()...");
  const tweetData = await client.getTweet(tweet.id);
  console.log("Got tweet:", tweetData);
  sleep(2000);
  // Test liking a tweet
  console.log("Testing likeTweet()...");
  await client.likeTweet(tweet.id);
  console.log("Liked tweet");
  sleep(2000);
  // Test retweeting a tweet
  console.log("Testing retweet()...");
  await client.retweet(tweet.id);
  console.log("Retweeted tweet");
  sleep(2000);
  // Test creating a quote tweet
  console.log("Testing createQuoteTweet()...");
  const quoteTweet = await client.createQuoteTweet("Quoted tweet!", tweet.id);
  console.log("Created quote tweet:", quoteTweet);
  sleep(2000);
  // Test following a user
  console.log("Testing followUser()...");
  await client.followUser("0xglu");
  console.log("Followed user");
  sleep(2000);
  // Test searching for tweets
  console.log("Testing searchTweets()...");
  const { tweets, nextCursor } = await client.searchTweets("elonmusk", {
    maxTweets: 5,
    searchMode: "Latest",
  });
  console.log("Found tweets:", tweets);
  console.log("Next cursor:", nextCursor);
  sleep(2000);
  console.log("Testing sendTweet() with media...");
  const tweetImg = await client.sendTweet(
    `Hello! ${new Date().toISOString()}`,
    {
      media: [
        { data: readFileSync("./test/assets/img.jpg"), type: "image/jpeg" },
      ],
    }
  );
  console.log("Tweeted:", tweetImg);
  sleep(2000);
  console.log("Testing sendTweet() with video...");
  const tweetVideo = await client.sendTweet(
    `Hello! ${new Date().toISOString()}`,
    {
      media: [
        { data: readFileSync("./test/assets/video.mp4"), type: "video/mp4" },
      ],
    }
  );
  console.log("Tweeted:", tweetVideo);
  console.log("Testing Posting a poll...");
  const pollTweet = await client.sendTweet(
    `Hello! ${new Date().toISOString()}`,
    {
      poll: {
        options: [
          { label: "Option 1" },
          { label: "Option 2" },
          { label: "Option 3" },
        ],
        duration_minutes: 10,
      },
    }
  );
  console.log("Tweeted:", pollTweet);
  sleep(2000);
  // Test getting a user profile
  console.log("Testing getProfile()...");
  const profile = await client.getProfile("0xglu");
  console.log("User profile:", profile);
  */
  console.log("Testing longform sendTweet()...");
  const tweet = await client.sendTweet(`Hello! ${new Date().toISOString()} 
  test really long message
  test really long message
  test really long message
  test really long message
  test really long message
  test really long message
  test really long message
  test really long message
  test really long message
  test really long message
  test really long message
  `);
  console.log("Tweeted:", tweet);
  sleep(2000);
}

testCookieAuth()
  .then(() => console.log("All tests passed!"))
  .catch((err) => console.error("Test failed:", err));
