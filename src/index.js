module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    plugins: ["prettier", "@typescript-eslint"],
    rules: {
        "prettier/prettier": [
            "error",
            { singleQuote: false, tabWidth: 4, printWidth: 80, semi: true },
        ],
        "@typescript-eslint/explicit-module-boundary-types": "warn",
        "@typescript-eslint/no-empty-function": 0,
        curly: ["warn", "multi"],
    },
    overrides: [
        {
            files: ["**/*.js"],
            excludedFiles: ["node_modules", "dist", "build"],
            rules: {
                "@typescript-eslint/no-var-requires": "off",
            },
        },
    ],
};
