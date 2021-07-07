module.exports = {
    extends: ["prettier"],
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                singleQuote: false,
                tabWidth: 4,
                printWidth: 80,
                semi: true,
                trailingComma: "none",
                endOfLine: "auto",
            },
        ],
    },
};
