const report = (context, chain, ...nodes) => {
  const n = nodes.length;

  const nodePath = chain.reverse().join(".");
  context.report({
    node: nodes[n - 1],
    message: `${nodePath} is not supported by electron.`,
  });
};

module.exports = report;
