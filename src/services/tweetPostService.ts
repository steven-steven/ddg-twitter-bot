import {twitterClient, twitterUploadClient} from "../utilities/twitterClient";

const tweet = async (imageBase64:any, message: string) => {
    // upload the media and get the media id
    const { media_id_string } = await twitterUploadClient.post("media/upload", {
        media: imageBase64
    });

    //Post tweet
    await twitterClient.post("statuses/update", { 
        status: message, 
        media_ids: media_id_string
    });
}

export { tweet };
