import assert from 'node:assert';
import { getDayOfYear, toModernJulianDate, toShortModernJulianDate } from '../index.js';
describe('getDayOfYear()', () => {
    describe('startAtZero = true', () => {
        it('Converts 2022-01-01 to 0', () => {
            assert.strictEqual(getDayOfYear(new Date(2022, 1 - 1, 1), true), 0);
        });
        it('Converts 2022-12-31 to 364', () => {
            assert.strictEqual(getDayOfYear(new Date(2022, 12 - 1, 31), true), 364);
        });
    });
    describe('startAtZero = false', () => {
        it('Converts 2022-01-01 to 1', () => {
            assert.strictEqual(getDayOfYear(new Date(2022, 1 - 1, 1), false), 1);
        });
        it('Converts 2022-12-31 to 365', () => {
            assert.strictEqual(getDayOfYear(new Date(2022, 12 - 1, 31), false), 365);
        });
    });
});
describe('toModernJulianDate()', () => {
    const testCases = [
        [new Date(2022, 1 - 1, 1, 23, 59, 59), '2022001'],
        [new Date(2022, 3 - 1, 1), '2022060'],
        [new Date(2022, 12 - 1, 31), '2022365'],
        [new Date(2020, 1 - 1, 1, 23, 59, 59), '2020001'],
        [new Date(2020, 3 - 1, 1), '2020061'],
        [new Date(2020, 12 - 1, 31), '2020366']
    ];
    for (const testCase of testCases) {
        it(`Converts ${testCase[0].toLocaleString()} to ${testCase[1].toString()}`, () => {
            assert.strictEqual(toModernJulianDate(testCase[0]), testCase[1]);
        });
    }
});
describe('toShortModernJulianDate()', () => {
    const testCases = [[new Date(2000, 1 - 1, 1), '00001']];
    for (const testCase of testCases) {
        it(`Converts ${testCase[0].toLocaleString()} to ${testCase[1].toString()}`, () => {
            assert.strictEqual(toShortModernJulianDate(testCase[0]), testCase[1]);
        });
    }
});
