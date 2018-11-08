module.exports = {
  extends: [
    "stylelint-config-standard"
  ],
  plugins: [],
  rules: {
    indentation: 2,
    "number-leading-zero": null,
    "selector-pseudo-class-no-unknown": [true, {
      ignorePseudoClasses: ["global"]
    }],
    "selector-max-id": 0,
    "selector-class-pattern": "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$"
  }
};
