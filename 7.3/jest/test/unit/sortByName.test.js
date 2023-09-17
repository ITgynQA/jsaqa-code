const sorting = require("../../app");

const config = require("./testCoverage");

describe("Books names test suit", () => {
    it("Books names should be sorted in ascending order", () => {
        const input = [
          "Гарри Поттер",
          "Властелин Колец",
          "Волшебник изумрудного города",
        ]

        const expected = [
          "Властелин Колец",
          "Волшебник изумрудного города",
          "Гарри Поттер",
        ]

        const result = sorting.sortByName(input)

        expect(result).toEqual(expected);
    });
});

describe("Books names test suit", () => {
    it("Books names should not be sorted", () => {
        const input = [
          "Гарри Поттер",
          "Гарри Поттер",
        ]

        const expected = [
          "Гарри Поттер",
          "Гарри Поттер",
        ]

        const result = sorting.sortByName(input)

        expect(result).toEqual(expected);
    });
});