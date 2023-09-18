document.addEventListener('DOMContentLoaded', () => {
    const numParagraphsInput = document.getElementById('numParagraphs');
    const generateButton = document.getElementById('generateButton');
    const resultDiv = document.getElementById('result');

    generateButton.addEventListener('click', () => {
        const numParagraphs = numParagraphsInput.value;
        if (numParagraphs < 1) {
            alert('Informe um número válido de parágrafos (pelo menos 1).');
            return;
        }

        const loremIpsum = generateLoremIpsum(numParagraphs);
        resultDiv.innerHTML = loremIpsum;
    });

    function generateLoremIpsum(numParagraphs) {
        let loremIpsumText = '';
        for (let i = 0; i < numParagraphs; i++) {
            loremIpsumText += `
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Suspendisse potenti. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <p>Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
                <br>`;
        }
        return loremIpsumText;
    }
});
