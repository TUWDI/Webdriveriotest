const course = "//div[text()='Fall 2020-21']/../*[text()='15210']";
const Page = require('./Page');

class coursePage {

    
    getCourse (season='Fall 2020-21',num=15210)
    {
       // return ("//div[text()='"+season+"]/../*[text()='"+num+"']")
        return `//div[text()='${season}']/../*[text()='${num}']`
    } 

    async clickOnCourse(season,num)
    {
        await Page.click( this.getCourse(season,num));
    }

}

module.exports= new coursePage();




