async function cat(path, outputPath = null) {
  try {
    const data = await fs.promises.readFile(path, "utf8");

    if (outputPath) {
      await fs.promises.writeFile(outputPath, data);
    } else {
      console.log(data);
    }
  } catch (error) {
    console.error(`Error reading file ${path}:`);
    console.error(error.message);
  }
}

async function webCat(url, outputPath = null) {
  try {
    const response = await axios.get(url);
    const data = response.data;

    if (outputPath) {
      await fs.promises.writeFile(outputPath, data);
    } else {
      console.log(data);
    }
  } catch (error) {
    console.error(`Error fetching ${url}:`);
    console.error(error.message);
  }
}
