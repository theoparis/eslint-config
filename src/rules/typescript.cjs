module.exports =
    {
          overrides: [
              {
                  files: ["*.ts", "*.tsx"],
                  extends: [
                      "plugin:@typescript-eslint/eslint-recommended", // disable conflicting eslint:recommended rules
                      "plugin:@typescript-eslint/recommended",
                  ],
                  parser: "@typescript-eslint/parser",
                  plugins: ["@typescript-eslint"],
                  rules: {
                      "@typescript-eslint/explicit-function-return-type": 0, // Prefer TS' type inference
                      "@typescript-eslint/no-empty-function": 0,
                      "@typescript-eslint/explicit-module-boundary-types": 0,
                  },
              },
              {
                  files: ["**/*.js"],
                  excludedFiles: ["node_modules", "dist", "build"],
                  rules: {
                      "@typescript-eslint/no-var-requires": "off",
                  },
              },
          ],
      }
