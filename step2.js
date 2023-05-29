const fs = require("fs");
const axios = require("axios");

async function cat(path) {
  try {
    const data = await fs.promises.readFile(path, "utf8");
    console.log(data);
  } catch (error) {
    console.error(`Error reading file ${path}:`);
    console.error(error.message);
  }
}

async function webCat(url) {
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.error(`Error fetching ${url}:`);
    console.error(error.message);
  }
}

async function main() {
  const argument = process.argv[2];

  if (argument.startsWith("http://") || argument.startsWith("https://")) {
    await webCat(argument);
  } else {
    await cat(argument);
  }
}

main();
