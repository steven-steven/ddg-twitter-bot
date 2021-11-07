import path from "path";
import fsCallback from "fs";
const fs = fsCallback.promises;

let index = 0;
let maxIndex = 2;

const tweetText = "text #hashtag"

// // get the image and the text
const getTweetData = async (): Promise<any> => {

    // read file
    const imgPath = path.join(__dirname, `../../src/images/${index}.png`);
    const img = await fs.readFile(imgPath);
    const imageBase64 = img.toString(('base64'));

    // increment index
    index = (index + 1) % (maxIndex+1);

    return [imageBase64, tweetText];
}

export default getTweetData;
