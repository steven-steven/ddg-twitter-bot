"use strict";

const Twit = require("twit");
const fs = require("fs");

const secrets = JSON.parse(fs.readFileSync("../../utilities/secrets.json"));

const twitAuth = {
    consumer_key:         secrets.twitter.consumer_key,
    consumer_secret:      secrets.twitter.consumer_secret,
    access_token:         secrets.twitter.access_token,
    access_token_secret:  secrets.twitter.access_token_secret
};

module.exports = twitUser = new Twit(twitAuth);