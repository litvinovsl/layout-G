const mainInfoParagraph = document.querySelector('.main-info__paragraph')
const url = 'https://baconipsum.com/api/?type=lucky'
async function getParagraph (){
    try {
        const response = await fetch(url)
        const data = await response.json()
        const rand = Math.floor(Math.random() * data.length);
        mainInfoParagraph.textContent = data[rand]
    } catch (e) {
        console.error(e)
    }
}
getParagraph()
