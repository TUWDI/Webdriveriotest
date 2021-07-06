class Page {

getElement (element){
    return  $(element);
  }
  
  async setValue (selector, value)
  {
    await (await this.getElement(selector)).setValue(value);
  }

}

module.exports = new Page();