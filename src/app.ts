import schedule from "node-schedule";
import ranksTweetUpdater from "./controllers/postRanksController";

// run every 15 minutes
schedule.scheduleJob('*/15 * * * *', () => ranksTweetUpdater());