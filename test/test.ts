// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable sonarjs/no-identical-expressions */

import assert from 'node:assert'
import { describe, it } from 'node:test'

import {
  fromModernJulianDate,
  getDayOfYear,
  toModernJulianDate,
  toShortModernJulianDate
} from '../index.js'

await describe('getDayOfYear()', async () => {
  await describe('startAtZero = true', async () => {
    await it('Converts 2022-01-01 to 0', () => {
      assert.strictEqual(getDayOfYear(new Date(2022, 1 - 1, 1), true), 0)
    })

    await it('Converts 2022-12-31 to 364', () => {
      assert.strictEqual(getDayOfYear(new Date(2022, 12 - 1, 31), true), 364)
    })
  })

  await describe('startAtZero = false', async () => {
    await it('Converts 2022-01-01 to 1', () => {
      assert.strictEqual(getDayOfYear(new Date(2022, 1 - 1, 1), false), 1)
    })

    await it('Converts 2022-12-31 to 365', () => {
      assert.strictEqual(getDayOfYear(new Date(2022, 12 - 1, 31), false), 365)
    })
  })
})

await describe('toModernJulianDate()', async () => {
  const testCases = [
    // non-leap year
    [new Date(2022, 1 - 1, 1, 23, 59, 59), '2022001'],
    [new Date(2022, 3 - 1, 1), '2022060'],
    [new Date(2022, 12 - 1, 31), '2022365'],

    // leap-year
    [new Date(2020, 1 - 1, 1, 23, 59, 59), '2020001'],
    [new Date(2020, 3 - 1, 1), '2020061'],
    [new Date(2020, 12 - 1, 31), '2020366']
  ]

  for (const testCase of testCases) {
    await it(`Converts ${testCase[0].toLocaleString()} to ${testCase[1].toString()}`, () => {
      assert.strictEqual(toModernJulianDate(testCase[0] as Date), testCase[1])
    })
  }
})

await describe('toShortModernJulianDate()', async () => {
  const testCases = [[new Date(2000, 1 - 1, 1), '00001']]

  for (const testCase of testCases) {
    await it(`Converts ${testCase[0].toLocaleString()} to ${testCase[1].toString()}`, () => {
      assert.strictEqual(
        toShortModernJulianDate(testCase[0] as Date),
        testCase[1]
      )
    })
  }
})

await describe('fromModernJulianDate()', async () => {
  await it('Converts a modern Julian date to a Date object', () => {
    const currentDate = new Date()

    const currentModernJulianDate = toModernJulianDate(currentDate)

    const convertedCurrentDate = fromModernJulianDate(currentModernJulianDate)

    assert.strictEqual(
      convertedCurrentDate.getFullYear(),
      currentDate.getFullYear()
    )
    assert.strictEqual(convertedCurrentDate.getMonth(), currentDate.getMonth())
    assert.strictEqual(convertedCurrentDate.getDate(), currentDate.getDate())
  })

  await it('Converts a short modern Julian date to a Date object', () => {
    const currentDate = new Date()

    const currentShortModernJulianDate = toShortModernJulianDate(currentDate)

    const convertedCurrentDate = fromModernJulianDate(
      currentShortModernJulianDate
    )

    assert.strictEqual(
      convertedCurrentDate.getFullYear(),
      currentDate.getFullYear()
    )
    assert.strictEqual(convertedCurrentDate.getMonth(), currentDate.getMonth())
    assert.strictEqual(convertedCurrentDate.getDate(), currentDate.getDate())
  })

  await it('Handles valid values', () => {
    const validStrings = ['2023004', '78123']

    for (const validString of validStrings) {
      fromModernJulianDate(validString)
    }
  })

  await it('Handles invalid values', () => {
    const invalidStrings = [
      'xxx',
      'xxxxx',
      'xxxxxxx',
      '2023xxx',
      '23xxx',
      '23400'
    ]

    for (const invalidString of invalidStrings) {
      try {
        fromModernJulianDate(invalidString)
        assert.fail(invalidString)
      } catch {}
    }
  })
})
