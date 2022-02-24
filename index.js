const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

const request = axios.create({
  baseURL: 'http://g1.com.br/'
});

async function getData() {
  try {
    const { data } = await request.get(`/`)
    return data
  } catch (err) {
    throw err;
  }
}

function writeJsonFile(nomeArquivo, conteudoArquivo) {
  nomeArquivo = nomeArquivo != undefined ? nomeArquivo : 'arquivo.json'
  conteudoArquivo = conteudoArquivo != undefined ? conteudoArquivo : ''

  fs.writeFile(nomeArquivo, conteudoArquivo, 'utf-8', (err) => {
    if (err) throw err;
  });
}

async function main() {
  try {
    const html = await getData()
    const $ = cheerio.load(html)


    const posts = []
    $('.bastian-page', html).each(function () {
      $(this).find('.bastian-feed-item').find('.feed-post-body').each(function () {
        const post = {
          image: '',
          title: '',
          subtitle: '',
          linkArticle: []
        }
        post.title = $(this).find('.feed-post-body-title').text()
        post.subtitle = $(this).find('.feed-post-header').find('.feed-post-header-chapeu').text()
        post.image = $(this).find('.bstn-fd-cover-picture').find('.bstn-fd-picture-image').attr('src')
        $(this).find('.bstn-relateditems li').each((id, el) => {
          post.linkArticle.push($(el).text())
        })

        posts.push(post)
      })
    })

    writeJsonFile('noticiasFromG1.json', JSON.stringify(posts, null, 2))

  } catch (error) {
    console.error(error)
  }
}
main()



