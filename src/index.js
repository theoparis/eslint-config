module.exports = {
    extends: [
        "./rules/bestPractices",
        "./rules/react",
        "./rules/prettier",
        "./rules/typescript",
    ].map(require.resolve),
    plugins: [],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: {
            jsx: true,
            impliedStrict: true,
        },
    },
    env: {
        browser: true,
        node: true,
        jest: true,
        es6: true,
        es2020: true,
    },
};
