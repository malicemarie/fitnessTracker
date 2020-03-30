"use strict";

const express = require(`express`);
const logger = require(`morgan`);
const mongoose = require(`mongoose`);
const htmlRoutes = require(`./routes/html-routes`);
const apiRoutes = require(`./routes/api-routes`);

const PORT = process.env.PORT || 3300;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(`public`));

app.use(logger(`dev`));

mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost/mongoHeadlines`,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

app.use(htmlRoutes, apiRoutes);

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
