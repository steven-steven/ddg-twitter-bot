# <img src="https://user-images.githubusercontent.com/22325824/140634645-cff65aee-3871-4c0f-998f-794af370960b.png" width="20" height="20"> DuckDuckGoose Twitter Bot 

The Duck Duck Goose Rankings Twitter Bot post a rotation of images and text every 15 min.

Fork from https://github.com/ilPikachu/vocaloid-rankings-twitter-bot

## To start
- Create `secrets.json` under `src` with your twitter app auth
```
{
    "TWITTER_CONSUMER_KEY": "...",
    "TWITTER_CONSUMER_SECRET": "...",
    "TWITTER_ACCESS_TOKEN": "...",
    "TWITTER_ACCESS_TOKEN_SECRET": "..."
}
```
- In `npm start`, change all occurance of `~/Documents/vocaloid-rankings-twitter-bot/` to the cloned project directory
- Create `logs` directory under project directory
- `npm install`
- `npm start`


## Commands to troubleshoot
- install forever globally `npm install forever -g`
- Verify scripts running `forever list`
- stop all program `forever stopall` (and then you could run `npm start` again to start it back up)

## To configure the tweets
- Fill src/images directory with the images, and name the files in the format of `<0-n>.png`
- go to the [getTweetData.ts](https://github.com/steven-steven/ddg-twitter-bot/blob/main/src/services/getTweetData.ts) file, and edit the `maxIndex` as `n` (the index of the last image. Note it starts from 0). Also change the `tweetText` to the desired message.
