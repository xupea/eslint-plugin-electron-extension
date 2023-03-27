const isIdentifier = (node) => node.type === "Identifier";

const isMemberExpression = (node) => node.type === "MemberExpression";

module.exports = {
  isIdentifier,
  isMemberExpression,
};
