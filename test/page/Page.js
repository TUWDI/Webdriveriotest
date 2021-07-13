class Page  {

    async getElement(element) {
        return await $(element);
    }

    async setValue(element, value) {
        await (await this.getElement(element)).setValue(value);
    }

    async click(element) {
        
        await (await this.getElement(element)).click();
    }

    async getElementText(element) {
        
        return await (await this.getElement(element)).getText();
    }


}
    module.exports= new Page ();