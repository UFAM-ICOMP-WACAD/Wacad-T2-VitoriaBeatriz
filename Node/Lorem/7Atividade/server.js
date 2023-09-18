const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.get('/generate', async (req, res) => {
  const { numParagraphs } = req.query;

  if (!numParagraphs || isNaN(numParagraphs)) {
    return res.status(400).send('Número inválido de parágrafos.');
  }

  const loremIpsum = generateLoremIpsum(Number(numParagraphs));
  res.send(loremIpsum);
});

function generateLoremIpsum(numParagraphs) {
 

  const loremIpsumText = `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Suspendisse potenti. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
    <p>Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
  `;

  return `<div>${loremIpsumText.repeat(numParagraphs)}</div>`;
}


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
