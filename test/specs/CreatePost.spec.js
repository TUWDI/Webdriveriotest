const CoursesPage = require("../page/Courses.page");
const CreateNewPostPage = require("../page/CreateNewPost.page");
const { clickOnNewPostBtn } = require("../page/CreateNewPost.page");
const Header = require("../page/Header");
const { SignIn } = require("../page/SignIn")


describe('Create "Question" post',  () => {

    before( async function (){
         await SignIn();
        
         await CoursesPage.clickOnCourse();
    })

    it('Navigate to Posts', async () => {

        
         
         await browser.maximizeWindow();
        await Header.clickOnPosts();
        await browser.pause(2000);

        const pepe = await $["//button[@aria-label='Go to New Post Form']"];
        await browser.pause(2000);
        await pepe.moveTo();
        await browser.pause(2000);
        await pepe.click();
        await browser.pause(2000);
       // await CreateNewPostPage.CreateNewPostPage();
        // await browser.pause(5000);

    })
})