module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest/globals": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "settings": {},
  "plugins": ["jest"],
  "rules": {
      "eqeqeq": ["error", "always"],
      "arrow-parens": ["error", "as-needed"],
      "indent": [
        "error",
        2,
        {
          "SwitchCase": 1,
          "ignoredNodes": [ "JSXAttribute", "JSXSpreadAttribute", ],
        }
      ],
      "max-len": [
        "error",
        {
          "ignoreTrailingComments": true,
          "ignoreComments": true,
          "code": 100
        }
      ],
      "linebreak-style": [
          0,
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "always"
      ],
      "brace-style": ["error", "1tbs"],
      "keyword-spacing": ["error", {"before": true, "after": true}],
      "new-cap": ["error", { "newIsCap": true }],
      "no-var": ["error"],
      "prefer-const": "error",
      "one-var": ["error", "never"],
      "space-infix-ops": "error",
      "no-nested-ternary": "error",
      "max-params": ["error", 3],
      "space-before-function-paren": ["error", "always"],
      "no-console": ["error", { "allow": ["warn", "error"]}]
  }
};
