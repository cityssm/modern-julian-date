import cityssmConfig, { cspellWords } from 'eslint-config-cityssm'
import tseslint from 'typescript-eslint'

export const config = tseslint.config(cityssmConfig, {
  files: ['**/*.ts'],
  rules: {
    '@cspell/spellchecker': [
      'warn',
      {
        cspell: {
          words: [...cspellWords, 'yyyyddd', 'yyddd']
        }
      }
    ],
    '@typescript-eslint/no-magic-numbers': 'off'
  }
})

export default config