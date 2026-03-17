import { eslintConfig } from 'metaowl/eslint'

export default [
  ...eslintConfig,
  {
    rules: {
      'comma-dangle': 'off'
    }
  }
]
