# Dead simple twitter integration

**Feel free to use/abuse and copy**

## Features

- media uploads
- polls
- retweets
- likes
- follow
- search
- get profile
- longform
- quote tweets (soon)

```bash

#  Put media files in ./test/assets/img.jpg & video.mp4
# Put cookie in ./test/cookie.json
# Create a test account when testing
bun run ./test/index.test.ts
```

## Warnings

1. cookie access for research purpose only
2. no rate limiting, implement that yourself
3. api v2 is untested

### Methods

- `sendTweet(text: string, options?: TweetOptions): Promise<Tweet>`
- `getTweet(id: string): Promise<Tweet>`
- `likeTweet(id: string): Promise<void>`
- `retweet(id: string): Promise<void>`
- `followUser(username: string): Promise<void>`
- `searchTweets(query: string, options?: SearchOptions): Promise<SearchResult>`
- `getProfile(username: string): Promise<Profile>`

## Acknowledgments

- [ai16z agent-twitter-client](https://github.com/ai16z/agent-twitter-client)
- [https://github.com/kingbootoshi/goat-x](https://github.com/kingbootoshi/goat-x)
- [https://github.com/the-convocation/twitter-scraper](https://github.com/the-convocation/twitter-scraper)

## Disclaimer

This software is provided "as is," without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages, or other liability, whether in an action of contract, tort, or otherwise, arising from, out of, or in connection with the software or the use or other dealings in the software.

Use this software at your own risk.
