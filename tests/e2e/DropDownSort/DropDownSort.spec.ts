import page from "./pages/home.page";

const testValue = "Red";

describe("Drop down sort", () => {
    it("when rendered the list view should be sorted by default", () => {
        page.open();
        page.dropdownSort.waitForVisible();
        page.listViewFirstItem.waitForVisible();
        browser.pause(1000);

        const itemValue = page.listViewFirstItem.getHTML();
        expect(itemValue).toContain(testValue);
    });
});
