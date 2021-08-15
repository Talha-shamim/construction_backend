import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import routers from './router/router.js';

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use('/sendMail', routers);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`)
})


