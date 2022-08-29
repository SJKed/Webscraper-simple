const axios = require("axios");
const express = require("express");
const cheerio = require("cheerio");

const app = express();

const url = "https://www.laget.se/eskhockey";
let savedData = [];

function getData(url) {
  axios(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const articles = [];

      $(".separatedList__itemOuter").each(function () {
        const title = $(this).find("h4").text();
        const link = url + $(this).find("a").attr("href");
        articles.push({ title, link });
        savedData = articles;

        console.log(articles);
      });
    })
    .catch(console.error);
}

function checkDataResemblance(articles) {
  for (let i = 0; i < articles.length; i++) {
    if (savedData.includes(articles[i])) {
      console.log("Data is the same");
      return true;
    }
  }
  console.log("New data found");
  return false;
}

function pingInterval() {
  getData(url);
  setInterval(() => {
    getData(url);
    checkDataResemblance(savedData);
  } , 1000 * 60 * 30);
}

pingInterval();

app.listen(8080, () => {
  console.log("listening on port 8080");
});