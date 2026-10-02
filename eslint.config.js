import js from "@eslint/js";
import globals from "globals";
export default [
  js.configs.recommended,
  {
    langageOptions: {
      globals: globals.node,
    },
  },
];
