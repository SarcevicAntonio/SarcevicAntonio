import { includeIgnoreFile } from '@eslint/compat'
import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import svelte from 'eslint-plugin-svelte'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import path from 'node:path'
import ts from 'typescript-eslint'
import svelte_config from './svelte.config.js'

const gitignore_path = path.resolve(import.meta.dirname, '.gitignore')

export default defineConfig(
	includeIgnoreFile(gitignore_path),
	js.configs.recommended,
	ts.configs.recommended,
	svelte.configs.recommended,
	prettier,
	svelte.configs.prettier,
	{
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
		rules: { 'no-undef': 'off' }, // better typescript-eslint compat
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig: svelte_config,
			},
		},
	},
	{
		// Override or add rule settings here, such as:
		// 'svelte/button-has-type': 'error'
		rules: {
			'svelte/no-navigation-without-resolve': 'warn',
			'@typescript-eslint/no-unused-vars': ['error', { destructuredArrayIgnorePattern: '^_' }],
			'@typescript-eslint/naming-convention': [
				'error',
				{ selector: 'default', format: ['snake_case'] },
				{ selector: 'typeLike', format: ['PascalCase'] },
				{ selector: 'parameter', modifiers: ['unused'], format: null },
				// config objects
				{ selector: 'objectLiteralProperty', format: ['snake_case', 'camelCase'] },
				{ selector: 'objectLiteralMethod', format: ['snake_case', 'camelCase'] },
				{ selector: 'objectLiteralProperty', modifiers: ['requiresQuotes'], format: null },
				// extending native class
				{ selector: 'classMethod', format: ['snake_case', 'camelCase'] },
				{ selector: 'classProperty', format: ['snake_case', 'camelCase'] },
				{ selector: 'classicAccessor', format: ['snake_case', 'camelCase'] },
				// svelte and kit
				{ selector: 'import', format: ['snake_case', 'PascalCase'] },
				{ selector: 'variable', format: ['snake_case', 'UPPER_CASE', 'PascalCase'] },
				{ selector: 'variable', modifiers: ['exported'], format: ['snake_case', 'UPPER_CASE'] },
				{ selector: 'function', modifiers: ['exported'], format: ['snake_case', 'UPPER_CASE'] },
			],
		},
	}
)
