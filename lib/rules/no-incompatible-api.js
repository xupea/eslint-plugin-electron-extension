/**
 * @fileoverview Rules for electron extension api
 * @author Peter Xu
 */
"use strict";

const safeGet = require("../utils/safeGet");
const { isIdentifier, isMemberExpression } = require("../utils/ast");
const report = require("../utils/report");

const mapApiToPropertyObject = {
  devtools: {
    inspectedWindow: {
      support: "all",
    },
    network: {
      support: "all",
    },
    panels: {
      support: "all",
    },
  },
  extension: {
    lastError: {
      support: "yes",
    },
    getURL: {
      support: "yes",
    },
    getBackgroundPage: {
      support: "yes",
    },
  },
  runtime: {
    lastError: { support: "yes" },
    id: { support: "yes" },
    getBackgroundPage: { support: "yes" },
    getManifest: { support: "yes" },
    getPlatformInfo: { support: "yes" },
    getURL: { support: "yes" },
    connect: { support: "yes" },
    sendMessage: { support: "yes" },
    reload: { support: "yes" },
    onStartup: { support: "yes" },
    onInstalled: { support: "yes" },
    onSuspend: { support: "yes" },
    onSuspendCanceled: { support: "yes" },
    onConnect: { support: "yes" },
    onMessage: { support: "yes" },
  },
  storage: {
    local: { support: "yes" },
  },
  tabs: {
    sendMessage: { support: "yes" },
    reload: { support: "yes" },
    executeScript: { support: "yes" },
    update: { support: "yes" },
  },
  management: {
    getAll: { support: "yes" },
    get: { support: "yes" },
    getSelf: { support: "yes" },
    getPermissionWarningsById: { support: "yes" },
    getPermissionWarningsByManifest: { support: "yes" },
    onEnabled: { support: "yes" },
    onDisabled: { support: "yes" },
  },
  webRequest: { support: "yes" },
};

const isExtensionApiPropertySupported = (callChain) => {
  const result = safeGet(mapApiToPropertyObject, callChain);
  return result.support === "all" || result.support === "yes";
};

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem", // `problem`, `suggestion`, or `layout`
    messages: "Rules for electron extension api",
    docs: {
      description: "Rules for electron extension api",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },
  create(context) {
    let chain = [];

    return {
      MemberExpression({ object, property }) {
        if (!isIdentifier(object) && !isMemberExpression(object)) {
          return;
        }

        const parent = isMemberExpression(object) ? object.property : object;

        chain.push(property.name, parent.name);

        if (
          parent.name === "chrome" &&
          !isExtensionApiPropertySupported(Array.from(new Set(chain)))
        ) {
          report(context, Array.from(new Set(chain)), parent, property);
        }
      },
    };
  },
};
