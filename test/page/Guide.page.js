const Page = require("./Page");
const defText = 'Getting Started'
const textcheck = '[class="postHeaderTitle"]';


class Guide {

    async checkText (textToCheck=defText) {

        expect(await Page.getElementText(await Page.getElement(textcheck))).toBe(textToCheck)
    
     }


    
}
module.exports = new Guide();