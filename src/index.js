const express = require("express");
const cors = require("cors");
const HttpStatus = require("http-status-codes");

require("module-alias/register");
require("dotenv").config();

require("@src/service/logger");
require("@src/redis");

const authentication = require("@src/middleware/authentication");
const routes = require("@src/route");

const app = express();

app.use(
  express.json(),
  cors({
    origin: process.env.CLIENT_URL,
    optionsSuccessStatus: HttpStatus.OK
  }),
  i18nextMiddleware.handle(i18next),
  authentication
);

app.use(routes);

app.use("*", (req, res) => {
  res.status(HttpStatus.NOT_FOUND).send("404 Not Found");
});
const port = process.env.APP_PORT || 3000;
app.listen(port, () => console.log(`Server listening at port ${port}`));
