/**
 * @param {*} doc A real big object full of all sorts of information about a document.
 * @returns {String} the markup of the first image.
 */
function extractFirstImage(doc) {
  if (!doc || !doc.hasOwnProperty("templateContent")) {
    console.warn(
      "❌ Failed to extract image: Document has no property `templateContent`."
    );
    return;
  }

  const content = doc.templateContent;

  if (content.includes("<img")) {
    const imgTagBegin = content.indexOf("<img");
    const imgTagEnd = content.indexOf(">", imgTagBegin);

    return content.substring(imgTagBegin, imgTagEnd + 1);
  }

  return "";
}

module.exports = { extractFirstImage };
