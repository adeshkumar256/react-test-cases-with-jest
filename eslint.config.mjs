import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import globals from "globals";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
export default [
  reactRecommended,
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    }
  }
]