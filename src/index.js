const cheerio = require('cheerio');

const { scrapHTML } = require('./utils/scrapHtml');
const { getDataPosts } = require('./api/getDataPosts');
const { writeJsonFile } = require('./utils/writeJsonFile');

async function createJsonFile() {
  try {
    const html = await getDataPosts()
    const $ = cheerio.load(html)

    const posts = scrapHTML(html, $)

    return writeJsonFile('noticiasFromG1.json', JSON.stringify(posts, null, 2))
  } catch (error) {
    console.error(error)
  }
}

createJsonFile()
