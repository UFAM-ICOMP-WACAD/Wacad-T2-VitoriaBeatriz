const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const directoryPath = __dirname; 

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      res.status(500).send('Erro interno do servidor');
      return;
    }

    
    const txtFiles = files.filter((file) => path.extname(file) === '.txt');

    const links = txtFiles.map((file) => {
      return `<a href="/file/${encodeURIComponent(file)}">${file}</a><br>`;
    });

    const htmlPage = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Lista de Arquivos .txt</title>
        </head>
        <body>
          <h1>Arquivos .txt em ${directoryPath}</h1>
          ${links.join('\n')}
        </body>
      </html>
    `;

    res.send(htmlPage);
  });
});

app.get('/file/:filename', (req, res) => {
  const filename = decodeURIComponent(req.params.filename);

  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Erro interno do servidor');
      return;
    }

    const backButton = `<a href="/">Voltar para a lista de links</a><br>`;
    const htmlPage = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${filename}</title>
        </head>
        <body>
          <h1>${filename}</h1>
          ${backButton}
          <pre>${data}</pre>
        </body>
      </html>
    `;

    res.send(htmlPage);
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
