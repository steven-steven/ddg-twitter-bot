import moment from "moment-timezone";
import pRetry from "p-retry";
import getTweetData from "../services/getTweetData"
import { tweet } from "../services/tweetPostService";

const ranksTweetUpdate = async (): Promise<void> => {
    const [imageBase64, text] = await getTweetData();
    await tweet(imageBase64, text);
    console.log(`${moment().utc().format()} Rank Tweet Successful`);
}

const ranksTweetUpdateExpoBackoff = (): Promise<void> => {
    return pRetry(() => ranksTweetUpdate(), {
        onFailedAttempt: error => {
            console.error(`${moment().utc().format()} Rank tweet attempt ${error.attemptNumber} failed. ${error}`);
        },
        retries: 3
    });
}

const ranksTweetUpdater = async () => {
    // try{
    //     await ranksTweetUpdate();
    // } catch (e) {
    //     console.log(e);
    // }
    const rankPromises: Promise<void>[] = [];
    rankPromises.push(ranksTweetUpdateExpoBackoff());
    console.log(rankPromises);
    Promise.allSettled(rankPromises);
}

export default ranksTweetUpdater;
