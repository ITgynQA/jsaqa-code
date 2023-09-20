let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {

  beforeEach(async () => {
  await page.goto("https://github.com/team");
});

  test("The h1 header content", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  },500);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  },500);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toMatch("Get started with Team")
  },500);
});


describe("Pricing page tests ", () => {

   beforeEach(async () => {
  await page.goto("https://github.com/pricing");
});
  
  test("The h1 header content ", async () => {
    await page.waitForSelector('h1');
    const title3 = await page.title();
    expect(title3).toEqual('Pricing · Plans for every developer · GitHub');
  });
// ...другие тесты для этой страницы 
});


describe("Enterprise page tests ", () => {

   beforeEach(async () => {
  await page.goto("https://github.com/enterprise");

});
  
  test("The h1 header content ", async () => {
    await page.waitForSelector('h1');
    const title3 = await page.title();
    expect(title3).toEqual('Enterprise · A smarter way to work together · GitHub');
  });
//...другие тесты для этой страницы
});


describe("Security page tests", () => {

   beforeEach(async () => {
  await page.goto("https://github.com/features/security");

});
  
  test("The h1 header content ", async () => {
    await page.waitForSelector('h1');
    const title3 = await page.title();
    expect(title3).toEqual('Features · Security · GitHub');
  });
  //...другие тесты для этой страницы
});

