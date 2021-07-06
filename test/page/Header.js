const Page = require('./page');

const postBtn= "span=Posts";

class Header {

   async clickOnPosts()
    {
        await Page.click(postBtn);
    }

}
module.exports= new Header();