# Modern Julian Date

[![npm (scoped)](https://img.shields.io/npm/v/@cityssm/modern-julian-date)](https://www.npmjs.com/package/@cityssm/modern-julian-date)
[![DeepSource](https://app.deepsource.com/gh/cityssm/modern-julian-date.svg/?label=active+issues&show_trend=true&token=gVQq0XqtU1PZ2BWi_k-y1so9)](https://app.deepsource.com/gh/cityssm/modern-julian-date/)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/cityssm/modern-julian-date)](https://codeclimate.com/github/cityssm/modern-julian-date)
[![codecov](https://codecov.io/gh/cityssm/modern-julian-date/graph/badge.svg?token=O2640MNNY0)](https://codecov.io/gh/cityssm/modern-julian-date)

Converts a regular JavaScript date to the modern Julian date format YYYYDDD,
commonly seen in banking applications.

## Getting Started

```sh
npm install @cityssm/modern-julian-date
```

## Usage

```javascript
import {
  toModernJulianDate,
  toShortModernJulianDate
} from "@cityssm/modern-julian-date";

/*
 * toModernJulianDate() returns date strings in YYYYDDD format.
 */

console.log( toModernJulianDate(new Date(2022, 1 - 1, 1)) );
// => '2022001'

console.log( toModernJulianDate(new Date(2022, 12 - 1, 31)) );
// => '2022365'

console.log( toModernJulianDate(new Date(2020, 12 - 1, 31)) );
// => '2020366'

/*
 * toShortModernJulianDate() returns date strings in YYDDD format.
 */

console.log( toShortModernJulianDate(new Date(2022, 1 - 1, 1)) );
// => '22001'
```
