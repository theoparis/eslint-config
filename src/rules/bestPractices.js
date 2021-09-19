module.exports = {
    settings: {
        "import/resolver": {
            node: {
                extensions: [
                    "js",
                    "jsx",
                    "ts",
                    "tsx",
                    "glsl",
                    "wasm"
                ]
            }
        }
    },
    extends: ["eslint:recommended", "import/recommended", "import/typescript"],
    plugins: ["prefer-arrow", "import"],
    rules: {
        "no-restricted-syntax": [
            2,
            "BinaryExpression[operator='in']",
            "WithStatement",
        ],
        "no-unused-vars": [
            1,
            {
                argsIgnorePattern: "res|next",
                ignoreRestSiblings: true,
            },
        ],
        "no-unused-expressions": [
            2,
            {
                allowTaggedTemplates: true,
            },
        ],
        "no-param-reassign": 2,
        "no-return-assign": [2, "except-parens"],
        "no-shadow": [
            1,
            {
                hoist: "all",
                allow: ["resolve", "reject", "done", "next", "err", "error"],
            },
        ],
        "no-console": 0,
        // Stylistic choices
        "prefer-arrow/prefer-arrow-functions": [
            "error",
            {
                disallowPrototype: true,
                singleReturnOnly: true,
                classPropertiesAllowed: false,
            },
        ],
        "arrow-body-style": ["error", "as-needed"],
        curly: ["error", "multi"],
        "arrow-body-style": [2, "as-needed"],
        "comma-dangle": [2, "never"],
    },
};
