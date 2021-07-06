const Page = require('./Page');

const newPostBtn = "[aria-label='Open New Post Form']";

class CreateNewPost 

{
    async clickOnNewPostBtn ()
    {
       await Page.click(newPostBtn);
    }

}

module.exports= new CreateNewPost();