const Page = require('./page');

class GitHubPage extends Page {
  
    open () { return super.open('https://github.com/explore'); }


    get explor_GitHub () {return $('[href="/explore"]')};
    get topicsBtn () {return $('[data-selected-links="topics_path /topics/ /topics"]')};
    get topicsTitle () {return $('//h1[contains(text(),"Topics")]')}
    get searchInput () {return $('[aria-label="Search GitHub"]')}
    get typeScriptBtn () {return $('[href="/search?l=TypeScript&q=webdriverio&type=Repositories"]')}
    get firstLink () {return $('//div [@class="f4 text-normal"][1]//a')}
}

module.exports= new GitHubPage();