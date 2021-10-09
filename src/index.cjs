module.exports = {
    extends: [
        "./rules/bestPractices.cjs",
        "./rules/react.cjs",
        "./rules/prettier.cjs",
        "./rules/typescript.cjs",
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
