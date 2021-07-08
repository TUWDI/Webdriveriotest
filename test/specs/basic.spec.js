const mainRegisterPage = require('../page/MainRegister.page.js')


describe ('test', () => {


    
    it ('register from main page', async () =>{

        await browser.url("https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home")
               
        await browser.pause(2000)
        await mainRegisterPage.setEmail();
        await browser.pause(2000)
        
       
         
     })
 
 
   
    
})


