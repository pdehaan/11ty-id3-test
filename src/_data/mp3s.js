const path = require("path");

const globby = require("globby");
const NodeID3 = require("node-id3");

const baseDir = path.join(__dirname, "..", "assets");
const mp3Path = path.join(baseDir, "*.mp3");

module.exports = async () => {
  const mp3s = await globby([mp3Path]);
  const res = [];
  for (const file of mp3s) {
    const id3 = await NodeID3.read(file);
    res.push({ file: file.replace(baseDir + path.sep, ""), ...id3 });
  }
  return res;
};
