const safeGet = (data, path) => {
  let paths = [...path];

  let res = data;

  while (paths.length) {
    res = res[paths.pop()] || res;
    if (!res) return undefined;
  }

  return res;
};

module.exports = safeGet;
