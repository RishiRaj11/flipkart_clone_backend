import express from "express";
import connection from "./database/db.js";
import dotenv from 'dotenv';
import defaultData from "./default.js";
import router from "./routes/route.js";
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();

dotenv.config();
//middleware
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/", router);
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const PORT = process.env.PORT || 8000;
const URL = `mongodb://${username}:${password}@ac-vcnzpyk-shard-00-00.x4r6ano.mongodb.net:27017,ac-vcnzpyk-shard-00-01.x4r6ano.mongodb.net:27017,ac-vcnzpyk-shard-00-02.x4r6ano.mongodb.net:27017/?ssl=true&replicaSet=atlas-l5leoa-shard-0&authSource=admin&retryWrites=true&w=majority`;



connection(URL);
app.listen(PORT, () => {
    console.log("listening at port 8000");
});
//defaultData();