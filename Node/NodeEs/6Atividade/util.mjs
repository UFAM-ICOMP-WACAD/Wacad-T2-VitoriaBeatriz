// util.mjs
function createLink(filename) {
  return `<a href="/file/${filename}">${filename}</a><br>\n`;
}

export { createLink };
