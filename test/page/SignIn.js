const { get } = require('lodash');
const Page = require('./Page');

const loginInput = '#id_username';
const passwordInput ='#id_password';
const loginBtn = '[class="btn btn-success btn-lg"]'

const login = 'umutacar+dijkstra@gmail.com'
const password = 'd3jkstr1d3d2r42020'
module.exports = { 
    
    SignIn:async ()=>{
     browser.url("https://staging.diderot.one/sign-in");
    await Page.addValue(loginInput,login);
    await Page.addValue(passwordInput,password);
    await Page.click(loginBtn);
}
};