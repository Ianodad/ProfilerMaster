/* eslint-env node */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "simple-import-sort",
        "react"
    ],
    "rules": {
        "simple-import-sort/imports": "error",
        react/prop-types": 0
    }
};
