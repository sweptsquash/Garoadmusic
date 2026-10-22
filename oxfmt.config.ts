import { defineConfig } from 'oxfmt'

export default defineConfig({
    semi: false,
    singleQuote: true,
    singleAttributePerLine: false,
    htmlWhitespaceSensitivity: 'ignore',
    printWidth: 100,
    tabWidth: 4,
    trailingComma: 'all',
    sortImports: {
        newlinesBetween: false,
        groups: [
            'type-import',
            ['value-builtin', 'value-external'],
            'type-internal',
            'value-internal',
            ['type-parent', 'type-sibling', 'type-index'],
            ['value-parent', 'value-sibling', 'value-index'],
            'unknown',
        ],
    },
    sortPackageJson: {
        sortScripts: true,
    },
    sortTailwindcss: {
        stylesheet: 'resources/css/app.css',
    },
    ignorePatterns: [
        '.github/**/*',
        'vendor/**',
        'node_modules/**',
        'public/**',
        'bootstrap/ssr/**',
        'tailwind.config.js',
        'resources/js/components/ui/*',
        'resources/views/mail/*',
        'resources/js/actions/**',
        'resources/js/routes/**',
        'resources/js/wayfinder/**',
        'resources/js/types/auto-components.d.ts',
        'resources/js/types/auto-imports.d.ts',
    ],
})
