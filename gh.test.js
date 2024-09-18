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

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  }, 6000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 6000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  }, 6000);
});


  describe("Github tests - task2", () => {

    test("Header of Actions", async () => {
      const expected = "Features • GitHub Actions";
      await page.goto("https://github.com/features/actions");
      const title = await page.title();
      expect(title).toContain(expected);
      }, 6000);

    test("Header of Cponsors", async () => {
      const expected = "Support the developers who power open source";
      await page.goto("https://github.com/sponsors");
      const actual = await page.$eval("#hero-section-brand-heading", (link) => link.textContent);
      expect(actual).toContain(expected);
      }, 6000);
  
    test("Header of Enterprise", async () => {
      const expected = "To build, scale, and deliver secure software.";
      await page.goto("https://github.com/enterprise");
      const actual = await page.$eval(".Primer_Brand__Text-module__Text___pecHN.Primer_Brand__Text-module__Text-font--mona-sans___GpzSG.Primer_Brand__Text-module__Text--default___DChoE.Primer_Brand__Text-module__Text--500___orDRu.Primer_Brand__Text-module__Text--weight-normal___siVLX.Primer_Brand__Hero-module__Hero-description___vG4iA", (link) => link.textContent);
      expect(actual).toContain(expected);
      }, 6000);

  });