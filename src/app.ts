import schedule from "node-schedule";
import ranksTweetUpdater from "./controllers/postRanksController";
import Term from "./interfaces/Term";

schedule.scheduleJob({ second: 0 }, () => ranksTweetUpdater());