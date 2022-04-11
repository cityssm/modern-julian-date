import * as assert from "assert";
import { toModernJulianDate } from "../index.js";
describe("toModernJulianDate()", () => {
    const testCases = [
        [new Date(2022, 1 - 1, 1, 23, 59, 59),
            2022001],
        [new Date(2022, 3 - 1, 1),
            2022060],
        [new Date(2022, 12 - 1, 31),
            2022365],
        [new Date(2020, 1 - 1, 1, 23, 59, 59),
            2020001],
        [new Date(2020, 3 - 1, 1),
            2020061],
        [new Date(2020, 12 - 1, 31),
            2020366],
    ];
    for (const testCase of testCases) {
        it("Converts " + testCase[0].toLocaleString() + " to " + testCase[1], () => {
            assert.strictEqual(toModernJulianDate(testCase[0]), testCase[1]);
        });
    }
});
