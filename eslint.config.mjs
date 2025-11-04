// @ts-check

import {
    defineConfigWithVueTs,
    vueTsConfigs,
} from '@vue/eslint-config-typescript'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import vue from 'eslint-plugin-vue'
import autoImports from './.eslintrc-auto-import.json' with { type: 'json' }

export default defineConfigWithVueTs(
    vue.configs['flat/recommended'],
    vueTsConfigs.recommended,
    {
        ignores: [
            'app/**/*',
            'bootstrap/**/*',
            'config/**/*',
            'database/**/*',
            'node_modules/**/*',
            'old-site/**/*',
            'public/**/*',
            'routes/**/*',
            'storage/**/*',
            'tests/**/*',
            'vendor/**/*',
            'package-lock.json',
            '*.md',
            'eslint.config.mjs',
            'tailwind.config.mjs',
            'resources/js/routes/routes.js',
            'resources/js/types/routes.d.ts',
            'resources/js/types/vite-env.d.ts',
        ],
    },
    {
        rules: {
            'vue/multi-word-component-names': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
    {
        languageOptions: autoImports,
    },
    {
        rules: {
            'comma-dangle': ['error', 'always-multiline'],
            'prettier/prettier': 'warn',
            'vue/component-name-in-template-casing': ['error', 'PascalCase'],
            'vue/block-order': [
                'error',
                { order: ['script[setup]', 'template', 'style[scoped]'] },
            ],
            'vue/define-macros-order': [
                'warn',
                { order: ['defineProps', 'defineEmits'] },
            ],
            'vue/multi-word-component-names': 'off',
            'vue/no-template-target-blank': [
                'error',
                { allowReferrer: false, enforceDynamicLinks: 'always' },
            ],
            'vue/no-ref-object-reactivity-loss': 'error',
            'vue/no-unused-refs': 'warn',
            'vue/no-useless-v-bind': 'error',
            'vue/no-v-html': 'off',
            'no-undef': 'off',
            'no-unused-vars': 'off',
            'no-console': ['warn'],
        },
    },
    eslintPluginPrettierRecommended,
    {
        rules: {
            'prettier/prettier': 'warn',
        },
    },
)
