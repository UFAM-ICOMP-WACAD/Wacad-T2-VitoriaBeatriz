const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000; 
const directoryPath = process.argv[2] || __dirname; 


function listDirectoryContents(directoryPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
}


app.get('/', async (req, res) => {
  try {
    const fileList = await listDirectoryContents(directoryPath);

   
    const txtFiles = fileList.filter((file) => file.endsWith('.txt'));

    const htmlList = txtFiles.map((item) => `<li>${item}</li>`).join('');

    const htmlPage = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Lista de Arquivos e Diretórios</title>
        </head>
        <body>
          <h1>Conteúdo de ${directoryPath}</h1>
          <ul>
            ${htmlList}
          </ul>
        </body>
      </html>
    `;

    res.send(htmlPage);
  } catch (err) {
    res.status(500).send(`Erro: ${err.message}`);
  }
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
