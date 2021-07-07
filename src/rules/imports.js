module.exports = {
    extends: ["plugin:import/recommended"],
    plugins: ["import"],
    rules: {
        // This rule is heavily broken when using webpack/any other module resolver
        "import/no-unresolved": 0,
        "import/prefer-default-export": 0,
        "import/extensions": 0,
    },
};
