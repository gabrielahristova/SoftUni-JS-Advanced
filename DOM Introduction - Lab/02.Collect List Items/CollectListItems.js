function extractText() {
    let ulElement = document.getElementById('items');
    let textAreaElemet = document.getElementById('result');
    textAreaElemet.textContent = ulElement.textContent;
}