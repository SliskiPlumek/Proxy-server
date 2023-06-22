const express = require("express");
const router = express.Router();
const axios = require("axios");
const apicache = require('apicache')
// importing env variables
const API_LINK = process.env.API_LINK;
const API_KEY_NAME = process.env.API_KEY_NAME;
const API_KEY = process.env.API_KEY;
// creating cache middleware
let cache = apicache.middleware
// router for /proxy? requests
router.get("/", cache('2 minutes'),  (req, res, next) => {
  // searching for all queries in the link
  const query = req.query;
  // searching in params the parameter of api_key_name with value of its key
  const params = new URLSearchParams({
    [API_KEY_NAME]: API_KEY,
    // passing all queries
    ...query,
  });
  // using axios
  axios 
    // getting the api with link + params
    .get(`${API_LINK}?${params}`)
    .then((resData) => {
      // getting and sending fetched data in json
      const data = resData.data;
      res.status(200).json(data);
      // logging request link in console
      console.log(`Request: ${API_LINK}?${params}`);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ message: "Invalid API url" });
    });
});

module.exports = router;
