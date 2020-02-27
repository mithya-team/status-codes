module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "google"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "semi": "off",
        "space-before-function-paren": "off",
        "eol-last": "off",
        "object-curly-spacing": "off",
        "no-trailing-spaces": "off",
        "padded-blocks": "off",
        "max-len": "off",
        "comma-dangle": "off"
    }
};