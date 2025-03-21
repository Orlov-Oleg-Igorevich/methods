import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        jest: true, // Добавлено глобальное определение для Jest
        test: true, // Добавлено глобальное определение для test
        it: true,   // Добавлено глобальное определение для it
        expect: true, // Добавлено глобальное определение для expect
        beforeEach: true
      },
      parserOptions: {
        ecmaVersion: 'latest', // Современная версия ECMAScript
        sourceType: 'module' // Используем модули ES
      }
    },
    rules: {}
  },
  pluginJs.configs.recommended,
  {ignores: [
    'node_modules/*',
    'dist/*',
    'webpack.config.js',
    'coverage/*',
  ]},
  {
    // Переопределение для тестов Jest
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        jest: true, // Добавлено глобальное определение для Jest
        test: true, // Добавлено глобальное определение для test
        it: true,   // Добавлено глобальное определение для it
        expect: true, // Добавлено глобальное определение для expect
        beforeEach: true
      },
    },
    files: ['**/*/*.test.js'],
    plugins: ['jest'],
    rules: {
      'jest/prefer-expect-assertions': 'off'
    },
    extends: ['plugin:jest/recommended'] // Рекомендуемые правила Jest
  },
];