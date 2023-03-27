/**
 * @fileoverview Rules for electron extension api
 * @author Peter Xu
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-incompatible-api"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-incompatible-api", rule, {
  valid: [
    // https://www.electronjs.org/docs/latest/api/extensions#chromedevtoolsinspectedwindow
    "chrome.devtools.inspectedWindow.allPropertiesMethodsEvents",
    // https://www.electronjs.org/docs/latest/api/extensions#chromedevtoolsnetwork
    "devtools.network.allPropertiesMethodsEvents",
    // https://www.electronjs.org/docs/latest/api/extensions#chromedevtoolspanels
    "devtools.panels.allPropertiesMethodsEvents",
    // // https://www.electronjs.org/docs/latest/api/extensions#chromeextension
    "extension.lastError",
    "extension.getURL()",
    "extension.getBackgroundPage()",
    // // https://www.electronjs.org/docs/latest/api/extensions#chromeruntime
    "chrome.runtime.lastError",
    "runtime.id",
    "runtime.getBackgroundPage()",
    "runtime.getManifest()",
    "runtime.getPlatformInfo()",
    "runtime.getURL()",
    "runtime.connect()",
    "runtime.sendMessage()",
    "runtime.reload()",
    "runtime.onStartup",
    "runtime.onInstalled",
    "runtime.onSuspend",
    "runtime.onSuspendCanceled",
    "runtime.onConnect",
    "runtime.onMessage",
    // // https://www.electronjs.org/docs/latest/api/extensions#chromewebrequest
    "storage.local",
    // // https://www.electronjs.org/docs/latest/api/extensions#chrometabs
    "tabs.sendMessage",
    "tabs.reload",
    "tabs.executeScript",
    "tabs.update",
    // // https://www.electronjs.org/docs/latest/api/extensions#chromemanagement
    "management.getAll",
    "management.get",
    "management.getSelf",
    "management.getPermissionWarningsById",
    "management.getPermissionWarningsByManifest",
    "management.onEnabled",
    "management.onDisabled",
    // // https://www.electronjs.org/docs/latest/api/extensions#chromewebrequest
    "chrome.webRequest.allPropertiesMethodsEvents",
  ],

  invalid: [
    // extension
    {
      code: "chrome.extension.inIncognitoContext",
      errors: [
        {
          message:
            "chrome.extension.inIncognitoContext is not supported by electron.",
        },
      ],
    },
    {
      code: "chrome.extension.getExtensionTabs()",
      errors: [
        {
          message:
            "chrome.extension.getExtensionTabs is not supported by electron.",
        },
      ],
    },
    // runtime
    {
      code: "chrome.runtime.openOptionsPage",
      errors: [
        {
          message:
            "chrome.runtime.openOptionsPage is not supported by electron.",
        },
      ],
    },
    // storage
    {
      code: "chrome.storage.sync",
      errors: [
        {
          message: "chrome.storage.sync is not supported by electron.",
        },
      ],
    },
    {
      code: "chrome.storage.managed",
      errors: [
        {
          message: "chrome.storage.managed is not supported by electron.",
        },
      ],
    },
    // tabs
    {
      code: "chrome.tabs.captureVisibleTab",
      errors: [
        {
          message:
            "chrome.tabs.captureVisibleTab is not supported by electron.",
        },
      ],
    },
    // management
    {
      code: "chrome.management.otherPropertiesMethodsEvents",
      errors: [
        {
          message:
            "chrome.management.otherPropertiesMethodsEvents is not supported by electron.",
        },
      ],
    },
  ],
});
