import js from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  // Global Ignores
  {
    ignores: [
      "**/node_modules/",
      "**/dist/",
      "**/.DS_Store",
      "**/pnpm-lock.yaml",
    ],
  },

  // Base Configuration for all JavaScript/TypeScript files
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    rules: {
      ...js.configs.recommended.rules,
      eqeqeq: "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-else-return": "error",
      "object-shorthand": "error",
      "prefer-const": "error",
    },
  },

  // TypeScript-specific Configuration
  tseslint.configs.recommended,
  tseslint.config({
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "@typescript-eslint/no-empty-object-type": [
        "error",
        { allowInterfaces: "always" },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  }),

  // Perfectionist Plugin for sorting/ordering
  {
    plugins: {
      perfectionist,
    },
    rules: {
      ...perfectionist.configs["recommended-natural"].rules,
      "perfectionist/sort-decorators": "off",
      "perfectionist/sort-enums": "off",
      "perfectionist/sort-exports": [
        "error",
        {
          order: "asc",
          partitionByNewLine: true,
        },
      ],
      "perfectionist/sort-imports": [
        "error",
        {
          groups: [
            "side-effect",
            "side-effect-style",
            "type",
            ["builtin", "external"],
            "internal-type",
            "internal",
            ["parent-type", "sibling-type", "index-type"],
            ["parent", "sibling", "index"],
            "object",
            "unknown",
          ],
        },
      ],
      "perfectionist/sort-interfaces": [
        "error",
        {
          order: "asc",
          partitionByNewLine: true,
        },
      ],
      "perfectionist/sort-jsx-props": [
        "error",
        {
          customGroups: {
            callback: "^on.+",
            classname: "^className$",
            id: "^id$",
            key: "^key$",
            ref: "^ref$",
            style: "^style$",
          },
          groups: [
            "key",
            "id",
            "classname",
            "style",
            "unknown",
            "callback",
            "ref",
          ],
        },
      ],
      "perfectionist/sort-modules": [
        "error",
        {
          order: "asc",
          partitionByNewLine: true,
        },
      ],
      "perfectionist/sort-union-types": [
        "error",
        {
          groups: [
            "conditional",
            "function",
            "import",
            "intersection",
            "keyword",
            "literal",
            "named",
            "object",
            "operator",
            "tuple",
            "union",
            "nullish",
          ],
          order: "asc",
        },
      ],
    },
  },
]);
