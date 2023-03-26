/**
 * @fileoverview Rules for electron extension api
 * @author Peter Xu
 */
"use strict";

const mapApiToPropertySet = new Map([
  ["devtools", new Set(["inspectedWindow", "network", "panels"])],
  ["extension", new Set(["lastError", "getURL", "getBackgroundPage"])],
  [
    "runtime",
    new Set([
      "lastError",
      "id",
      "getBackgroundPage",
      "getManifest",
      "getPlatformInfo",
      "getURL",
      "connect",
      "sendMessage",
      "reload",
      "onStartup",
      "onInstalled",
      "onSuspend",
      "onSuspendCanceled",
      "onConnect",
      "onMessage",
    ]),
  ],
  ["storage", new Set(["local"])],
  ["tabs", new Set(["sendMessage", "reload", "executeScript", "update"])],
  [
    "management",
    new Set([
      "getAll",
      "get",
      "getSelf",
      "getPermissionWarningsById",
      "getPermissionWarningsByManifest",
      "onEnabled",
      "onDisabled",
    ]),
  ],
  ["webRequest", new Set([""])],
]);

const isExtensionApiPropertySupported = (object, property) => {
  // console.log(object, property)
  if (object === "chrome" && mapApiToPropertySet.has(property)) {
    return true;
  }

  if (!mapApiToPropertySet.has(object)) {
    return false;
  }
  const propertySet = mapApiToPropertySet.get(object);
  return propertySet.has(property);
};

const isIdentifier = (node) => node.type === "Identifier";

const isMemberExpression = (node) => node.type === "MemberExpression";

const report = (context, ...nodes) => {
  const n = nodes.length;
  if (!context) {
    throw new Error("context is missing!");
  }
  if (n < 1) {
    throw new Error("report requires at least one argument!");
  }
  const nodePath = nodes.map(({ name }) => name).join(".");
  context.report({
    node: nodes[n - 1],
    message: `${nodePath} is supported by electron.`,
  });
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

        if (parent.name === "chrome") {
          const chain2 = Array.from(new Set(chain))
          console.log(chain2);
        }
        
        if (
          parent.name === "chrome" &&
          !isExtensionApiPropertySupported(parent.name, property.name)
        ) {
          report(context, parent, property);
        }
      },
    };
  },
};
