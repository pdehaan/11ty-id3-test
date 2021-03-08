const path = require("path");

const globby = require("globby");
const NodeID3 = require("node-id3");
const mm = require("music-metadata");

const baseDir = path.join(__dirname, "..", "assets");
const mp3Path = path.join(baseDir, "*.mp3");

module.exports = async () => {
  const mp3s = await globby([mp3Path]);
  const res = [];
  for (const file of mp3s) {
    const { common } = await mm.parseFile(file);
    const { picture, ...id3 } = common;

    // const { image, raw, ...id3 } = await NodeID3.read(file);
    res.push({ file: path.basename(file), ...id3 });
  }
  return res;
};
