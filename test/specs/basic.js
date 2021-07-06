const mainPage = require('../page/main.page.js')
const mainRegisterPage = require('../page/MainRegister.page.js')
const verisonPage = require('../page/forgot.page.js')
const loginPage = require('../page/login.page.js')
const { contFromPassword } = require('../page/MainRegister.page.js')
const forgotPage = require('../page/forgot.page.js')
const joinFreePage = require('../page/JoinFree.page')
const githubPage = require('../page/github.page.js')
const enterprisePage = require('../page/githubEnterprise.page.js')
const enterpriseServerPage = require('../page/enterpriseServer.page.js')
const carersPage = require('../page/carers.page.js')
const { log } = require('easy-table')

describe ('test', () => {


    
    it ('register from main page', async () =>{

        await mainPage.open();
        
        await mainPage.addValuetoElem(await mainPage.emailInput ,await mainPage.GenerateRandomEmail(10,5));
        await mainPage.elemntClick(await mainPage.signUpBtn);
        await browser.pause(3000);
        await mainPage.elemntClick(await mainRegisterPage.continueEmail);
        await browser.pause(1000);
 
        await mainPage.addValuetoElem(await mainRegisterPage.password ,await mainPage.GenerateRandomText(17));
        await browser.pause(1000); 
        await mainPage.elemntClick(await mainRegisterPage.continuePassword);
        await browser.pause(1000); 
 
        await mainPage.addValuetoElem(await mainRegisterPage.userName ,await mainPage.GenerateRandomText(15));
        await browser.pause(1000); 
        await mainPage.elemntClick(await mainRegisterPage.continueUserName);
        await browser.pause(1000); 
 
        await mainRegisterPage.ProductAnswer();
        await mainPage.elemntClick(await mainRegisterPage.continueProduct);
        await browser.pause(2000); 
 
       
        await expect(await mainRegisterPage.veriFiy).toBeDisplayed();
         
     })
 
 
     
    it ('register footer button ', async () =>{
 
        await mainPage.open();
        await mainPage.pressSignUpBtn();
        await browser.pause(3000);

        await mainPage.addValuetoElem(await mainRegisterPage.email ,await mainPage.GenerateRandomEmail(10,5));
        await browser.pause(1000);
        await mainPage.elemntClick(await mainRegisterPage.continueEmail);
        await browser.pause(1000);
 
        await mainPage.addValuetoElem(await mainRegisterPage.password ,await mainPage.GenerateRandomText(17));
        await browser.pause(1000); 
        await mainPage.elemntClick(await mainRegisterPage.continuePassword);
        await browser.pause(1000); 
 
        await mainPage.addValuetoElem(await mainRegisterPage.userName ,await mainPage.GenerateRandomText(15));
        await browser.pause(1000); 
        await mainPage.elemntClick(await mainRegisterPage.continueUserName);
        await browser.pause(1000); 
 
        await mainRegisterPage.ProductAnswer();
        await mainPage.elemntClick(await mainRegisterPage.continueProduct);
        await browser.pause(2000); 
    
        await expect(await mainRegisterPage.veriFiy).toBeDisplayed();
    })

    it ('Sign In with correct credentials ', async () =>{


        await mainPage.open();
        await browser.maximizeWindow();
        await mainPage.pressSignInBtn();
        await browser.pause(1000);

        await loginPage.userNameEntering("TestAcountForWebdriverIo");
        await loginPage.passwordEntering("asd356FSF6754a")
        await loginPage.buttonPressSignIn();
        await browser.pause(1000);

        await expect(await loginPage.titleCheck).toHaveText("All activity");
        await loginPage.ProfileButton();
        await expect(await loginPage.loginCheck).toHaveText("Signed in as TestAcountForWebdriverIo");
        await browser.deleteCookies()
        

        
    })

    it ('Reset your password with invalid email', async () =>{

        await forgotPage.open();
        await forgotPage.emailEntering(await mainPage.GenerateRandomEmail(10,5));
        await browser.pause(1000);
        await expect(await forgotPage.Verify).toHaveText("Verify your account");
        await browser.pause(1000);
    //Не могу реализовать отправку поскольку требует прохождение капчи
       

    })

    it ('Mouse hover to buttons and isDisplayed verification', async () =>{

        await mainPage.open();
        await browser.maximizeWindow();

        await mainPage.mousehoverOnElem(await mainPage.WhyGithub);
        await browser.pause(1000);
        await expect(await mainPage.WhyGithub).toBeDisplayed();
        
        await mainPage.mousehoverOnElem(await mainPage.explore);
        await browser.pause(1000);
        await expect(await mainPage.explore).toBeDisplayed();
       
        await mainPage.mousehoverOnElem(await mainPage.pricing);
        await browser.pause(1000);
        await expect(await mainPage.pricing).toBeDisplayed();
        
    })

    // Срабатывает через раз, не всегда открываеться меню Pricing после mouse hover по этому добавил строку прямого перехода
    it ('Registraion with join for free button ', async () =>{

        await mainPage.open();
        await browser.maximizeWindow();
        await browser.pause(2000);
        await mainPage.mousehoverOnElem(await mainPage.pricing);
        await browser.pause(1000);
            
        await browser.url('https://github.com/pricing');

        //await mainPage.elemntClick(await mainPage.plansOfPrice);
        await browser.pause(1000);
        await mainPage.elemntClick(await joinFreePage.signUp);
        await browser.pause(1000);

        await mainPage.addValuetoElem(await joinFreePage.userName, await mainPage.GenerateRandomText(10));
        await mainPage.addValuetoElem(await joinFreePage.emailAddres, await mainPage.GenerateRandomEmail(10,5));
        await mainPage.addValuetoElem(await joinFreePage.passWord, await mainPage.GenerateRandomText(15));
        await expect(await joinFreePage.verify).toBeDisplayed();
        await browser.pause(2000);
        
    })
    // Срабатывает через раз, не всегда открываеться меню explore после mouse hover по этому добавил строку прямого перехода
    
    it ('Exlpore GitHub and check is "topics" displayed ', async () =>{

        await mainPage.open();
        await browser.maximizeWindow();
        await browser.pause(2000);

        await mainPage.mousehoverOnElem(await mainPage.explore);
        await browser.pause(1000);
        await browser.url('https://github.com/explore'); 
        //await mainPage.elemntClick(await githubPage.explor_GitHub);
        await browser.pause(3000)
   
        await mainPage.elemntClick(await githubPage.topicsBtn);
        await expect(await githubPage.topicsTitle).toBeDisplayed();
        await browser.pause(1000);
    })


    it ('Exlpore GitHub for webdriverio  ', async () =>{

        await githubPage.open();
        await browser.maximizeWindow();
        await browser.pause(2000);

        await mainPage.addValuetoElem(await githubPage.searchInput,"webdriverio")
        await browser.keys('Enter')
        await browser.pause(1000);
        
        await mainPage.elemntClick(await githubPage.typeScriptBtn);
        await browser.pause(1000);
        await mainPage.elemntClick(await githubPage.firstLink);
        await browser.pause(1000);
   
        await expect(browser).toHaveUrlContaining('webdriverio')
        
    })
       

    it ('Regiser account with github enterprise cloud ', async () =>{

        await enterprisePage.open();
        await mainPage.elemntClick(await enterprisePage.startTrial);
        await browser.pause(2000);
       
        await mainPage.elemntClick(await enterprisePage.enterpriseCloud)
        await browser.pause(2000);

        await mainPage.addValuetoElem(await joinFreePage.userName, await mainPage.GenerateRandomText(10));
        await mainPage.addValuetoElem(await joinFreePage.emailAddres, await mainPage.GenerateRandomEmail(10,5));
        await mainPage.addValuetoElem(await joinFreePage.passWord, await mainPage.GenerateRandomText(15));
        await expect(await joinFreePage.verify).toBeDisplayed();
        await browser.pause(2000);
        
    })


    it ('Regiser account with github enterprise server  ', async () =>{

        await enterprisePage.open();
        await mainPage.elemntClick(await enterprisePage.startTrial);
        await browser.pause(2000);

        await mainPage.elemntClick(await enterpriseServerPage.enterpriseServer);
        await browser.pause(2000);
       
        
        await mainPage.addValuetoElem(await enterpriseServerPage.name, await mainPage.GenerateRandomText(10));
        await mainPage.addValuetoElem(await enterpriseServerPage.nameOrganisation, await mainPage.GenerateRandomText(10));
        await mainPage.addValuetoElem(await enterpriseServerPage.workEmail , await mainPage.GenerateRandomEmail(10,5));
        await mainPage.addValuetoElem(await enterpriseServerPage.phoneNum , await mainPage.GenerateRandomNum(7));
        await mainPage.elemntClick(await enterpriseServerPage.radioBtn);
        await mainPage.elemntClick(await enterpriseServerPage.secRadioBtn);
        await mainPage.addValuetoElem(await enterpriseServerPage.questionlist , await mainPage.GenerateRandomText(30));
        await mainPage.elemntClick(await enterpriseServerPage.accpetTerm);
      
        await browser.pause(2000);
        
        
        
    })

    it ('output carers labels in console ', async () =>{

        await mainPage.open();
        await mainPage.elemntClick(await carersPage.carersBtn);
        await browser.pause(2000);

        

        await mainPage.elemntClick(await carersPage.openPositionBtn);
        await browser.pause(2000)

        
        for (let index = 1; index < 19; index++) {

            await console.log ( index+ "-element -"+ await (await carersPage.setElement(index)).getText())

            
        }

         await browser.pause(2000);

       
        
        
        
        
        
    })
    
})


