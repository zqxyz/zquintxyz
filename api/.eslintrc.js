module.exports = {
    env: {
        es6: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
    },
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'eslint-config-prettier',
    ],
    settings: {
        'import/resolver': {
            node: {
                paths: ['.'],
                extensions: ['.js'],
            },
        },
    },
    rules: {
        'no-undef': 0,
        'no-unused-vars': 0,
    },
};
