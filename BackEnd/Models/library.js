const { Schema, model } = require("../connection");
const LibrarySchema = new Schema({
  name: String,
  category: String,
  url: String,
  link: String,
  package_name: String,
  downloads: String,
  description: String,
});

module.exports = model("library", LibrarySchema);
