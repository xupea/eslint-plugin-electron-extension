# Rules for electron extension api (`electron-extension/no-incompatible-api`)

<!-- end auto-generated rule header -->

Electron supports a subset of the Chrome Extensions API.

## Rule Details

This rule aims to keep extensions working in electron.

Examples of **incorrect** code for this rule:

```js

chrome.scripting.executeScript()

```

Examples of **correct** code for this rule:

```js

chrome.tabs.executeScript()

```

## When Not To Use It

Give a short description of when it would be appropriate to turn off this rule.

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
