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
    "chrome.devtools.inspectedWindow.a",
    // https://www.electronjs.org/docs/latest/api/extensions#chromedevtoolsnetwork
    // "devtools.network",
    // // https://www.electronjs.org/docs/latest/api/extensions#chromedevtoolspanels
    // "devtools.panels",
    // // // https://www.electronjs.org/docs/latest/api/extensions#chromeextension
    // "extension.lastError",
    // "extension.getURL()",
    // "extension.getBackgroundPage()",
    // // // https://www.electronjs.org/docs/latest/api/extensions#chromeruntime
    "chrome.runtime.lastError",
    // "runtime.id",
    // "runtime.getBackgroundPage()",
    // "runtime.getManifest()",
    // "runtime.getPlatformInfo()",
    // "runtime.getURL()",
    // "runtime.connect()",
    // "runtime.sendMessage()",
    // "runtime.reload()",
    // "runtime.onStartup",
    // "runtime.onInstalled",
    // "runtime.onSuspend",
    // "runtime.onSuspendCanceled",
    // "runtime.onConnect",
    // "runtime.onMessage",
    // // // https://www.electronjs.org/docs/latest/api/extensions#chromewebrequest
    // "storage.local",
    // // // https://www.electronjs.org/docs/latest/api/extensions#chrometabs
    // "tabs.sendMessage",
    // "tabs.reload",
    // "tabs.executeScript",
    // "tabs.update",
    // // // https://www.electronjs.org/docs/latest/api/extensions#chromemanagement
    // "management.getAll",
    // "management.get",
    // "management.getSelf",
    // "management.getPermissionWarningsById",
    // "management.getPermissionWarningsByManifest",
    // "management.onEnabled",
    // "management.onDisabled",
    // // // https://www.electronjs.org/docs/latest/api/extensions#chromewebrequest
    // "chrome.webRequest",
  ],
  
  invalid: [
    // // extension
    // {
    //   code: "extension.inIncognitoContext",
    //   errors: [
    //     {
    //       message: "extension.inIncognitoContext is supported by electron.",
    //     },
    //   ],
    // },
    // {
    //   code: "extension.getExtensionTabs()",
    //   errors: [
    //     {
    //       message: "extension.getExtensionTabs is supported by electron.",
    //     },
    //   ],
    // },
    // // runtime 
    // {
    //   code: "runtime.openOptionsPage",
    //   errors: [
    //     {
    //       message: "runtime.openOptionsPage is supported by electron.",
    //     },
    //   ],
    // },
    // // storage
    // {
    //   code: "storage.sync",
    //   errors: [
    //     {
    //       message: "storage.sync is supported by electron.",
    //     },
    //   ],
    // },
    // {
    //   code: "storage.managed",
    //   errors: [
    //     {
    //       message: "storage.managed is supported by electron.",
    //     },
    //   ],
    // },
    // // tabs
    // {
    //   code: "tabs.captureVisibleTab",
    //   errors: [
    //     {
    //       message: "tabs.captureVisibleTab is supported by electron.",
    //     },
    //   ],
    // },
    // // management
    // {
    //   code: "management.otherMethods",
    //   errors: [
    //     {
    //       message: "management.otherMethods is supported by electron.",
    //     },
    //   ],
    // },
  ],
});
