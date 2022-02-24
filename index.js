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

function escreverArquivo(nomeArquivo, conteudoArquivo) {
    nomeArquivo = nomeArquivo != undefined ? nomeArquivo : 'arquivo.json'
    conteudoArquivo = conteudoArquivo != undefined ? conteudoArquivo : ''

    fs.writeFile(nomeArquivo, conteudoArquivo, 'utf-8', (err) => {
        if (err) throw err;
    });
}

async function main() {
    try {
        html = await getData()

        //const $ = cheerio.load(html)

        escreverArquivo('noticiasFromG1.json', JSON.stringify(html, null, 2))
    } catch (error) {
        console.error(error)
    }
}
main()