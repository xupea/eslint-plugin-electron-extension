# eslint-plugin-electron-extension

ESLint plugin for electron extension

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-electron-extension`:

```sh
npm install eslint-plugin-electron-extension --save-dev
```

## Usage

Add `electron-extension` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "electron-extension"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "electron-extension/no-incompatible-api": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->

| Name                                                     | Description                      |
| :------------------------------------------------------- | :------------------------------- |
| [no-incompatible-api](docs/rules/no-incompatible-api.md) | Rules for electron extension api |

<!-- end auto-generated rules list -->


