// server.mjs
import express from 'express';
import { readdir, readFile } from 'fs/promises';
import path from 'path';
import { createLink } from './util.mjs';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  try {
    const directoryPath = __dirname; 

    const files = await readdir(directoryPath);

    
    const txtFiles = files.filter((file) => path.extname(file) === '.txt');

    const links = txtFiles.map(createLink).join('');

    const htmlPage = `
      <!DOCTYPE html>
      <html>
        <body>
          ${links}
        </body>
      </html>
    `;

    res.send(htmlPage);
  } catch (err) {
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/file/:filename', async (req, res) => {
  try {
    const filename = decodeURIComponent(req.params.filename);

    const data = await readFile(filename, 'utf8');

    const backButton = `<a href="/">Voltar para a lista de links</a><br>`;
    const htmlPage = `
      <!DOCTYPE html>
      <html>
        <body>
          <h1>${filename}</h1>
          ${backButton}
          <pre>${data}</pre>
          ${backButton}
        </body>
      </html>
    `;

    res.send(htmlPage);
  } catch (err) {
    res.status(500).send('Erro interno do servidor');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
