import js from '@eslint/js'
import * as parser from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import perfectionist from 'eslint-plugin-perfectionist'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist', 'vite.config.ts', '*/*.d.ts'] },
  {
    extends: [
      js.configs.recommended,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      eslintConfigPrettier,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parser: parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: '.',
      },
    },
    plugins: {
      perfectionist: perfectionist,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react/recommended': react.configs.recommended,
      'react/jsx-runtime': react.configs['jsx-runtime'],
      'import/recommended': importPlugin.configs.recommended,
      'import/typescript': importPlugin.configs.typescript,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      /* React Rules*/
      'react/display-name': 'off',
      'react/jsx-sort-props': 'off',
      'react/prop-types': 'off',

      /* Typescript Rules*/
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-misused-promises': ['warn', { checksVoidReturn: false }],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allowAny: false,
          allowBoolean: false,
          allowNullish: false,
          allowNumber: true,
          allowRegExp: false,
          allowNever: false,
        },
      ],

      /* Perfectionist Rules */
      'perfectionist/sort-array-includes': [
        'warn',
        {
          type: 'alphabetical',
          order: 'asc',
        },
      ],
      'perfectionist/sort-classes': [
        'warn',
        {
          type: 'alphabetical',
          order: 'asc',
        },
      ],
      'perfectionist/sort-enums': 'off',
      'perfectionist/sort-exports': [
        'warn',
        {
          type: 'alphabetical',
          order: 'asc',
        },
      ],
      'perfectionist/sort-heritage-clauses': [
        'warn',
        {
          type: 'alphabetical',
          order: 'asc',
        },
      ],
      'perfectionist/sort-imports': 'off',
      'perfectionist/sort-interfaces': [
        'warn',
        {
          type: 'alphabetical',
          order: 'asc',
        },
      ],
      'perfectionist/sort-intersection-types': [
        'warn',
        {
          type: 'alphabetical',
          order: 'asc',
        },
      ],
      'perfectionist/sort-jsx-props': [
        'warn',
        {
          type: 'alphabetical',
          order: 'asc',
        },
      ],
      'perfectionist/sort-maps': [
        'warn',
        {
          type: 'alphabetical',
          order: 'asc',
        },
      ],
      'perfectionist/sort-modules': [
        'warn',
        {
          type: 'alphabetical',
          order: 'asc',
        },
      ],
      'perfectionist/sort-named-imports': 'off',
      'perfectionist/sort-object-types': [
        'warn',
        {
          type: 'alphabetical',
          order: 'asc',
        },
      ],
      'perfectionist/sort-sets': [
        'warn',
        {
          type: 'alphabetical',
          order: 'asc',
        },
      ],
      'perfectionist/sort-objects': [
        'warn',
        {
          type: 'alphabetical',
          order: 'asc',
        },
      ],
      'perfectionist/sort-switch-case': [
        'warn',
        {
          type: 'alphabetical',
          order: 'asc',
        },
      ],
      'perfectionist/sort-union-types': [
        'warn',
        {
          type: 'alphabetical',
          order: 'asc',
        },
      ],
      'perfectionist/sort-variable-declarations': [
        'warn',
        {
          type: 'alphabetical',
          order: 'asc',
        },
      ],
    },
    settings: {
      perfectionist: {
        type: 'alphabetical',
        partitionByComment: true,
      },
      'import/resolver': {
        typescript: true,
        node: true,
      },
      react: {
        version: 'detect',
      },
    },
  }
)
