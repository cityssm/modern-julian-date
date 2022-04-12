# Modern Julian Date

[![npm (scoped)](https://img.shields.io/npm/v/@cityssm/modern-julian-date)](https://www.npmjs.com/package/@cityssm/modern-julian-date)
[![Codacy grade](https://img.shields.io/codacy/grade/a5309114d6e24e718063643cb5153e02)](https://app.codacy.com/gh/cityssm/modern-julian-date/dashboard)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/cityssm/modern-julian-date)](https://codeclimate.com/github/cityssm/modern-julian-date)
[![Code Climate coverage](https://img.shields.io/codeclimate/coverage/cityssm/modern-julian-date)](https://codeclimate.com/github/cityssm/modern-julian-date)
[![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/cityssm/modern-julian-date)](https://app.snyk.io/org/cityssm/project/dd6d1fe5-d395-4577-8f37-41eeb38f534d)

Converts a regular JavaScript date to the modern Julian date format YYYYDDD,
commonly seen in banking applications.

## Getting Started

```sh
npm install @cityssm/modern-julian-date
```

## Usage

```javascript
import { toModernJulianDate } from "@cityssm/modern-julian-date";

console.log( toModernJulianDate(new Date(2022, 1 - 1, 1)) );
// => 2022001

console.log( toModernJulianDate(new Date(2022, 12 - 1, 31)) );
// => 2022365

console.log( toModernJulianDate(new Date(2020, 12 - 1, 31)) );
// => 2020366
```
