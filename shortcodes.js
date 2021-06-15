const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes = "") {
  let metadata = await Image(src, {
    widths: [300, 600, 768],
    formats: ["avif", "webp", "jpeg"]
  });

  let imageAttributes = {
    alt,
    sizes: "(max-width: 45em) 90vw, 40em",
    loading: "lazy",
    decoding: "async",
  };

  if (sizes) {
      imageAttributes.sizes = sizes;
  }

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: "inline", //option to strip the whitespace from the output of the <picture> element 
                              //(a must-have for use in markdown files).
  });
}

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

  if (content.includes("<picture")) {
    const imgTagBegin = content.indexOf("<picture");
    const imgTagEnd = content.indexOf("/picture>", imgTagBegin);

    return content.substring(imgTagBegin, imgTagEnd + 1);
  } else if (content.includes("<img")) {
    const imgTagBegin = content.indexOf("<img");
    const imgTagEnd = content.indexOf(">", imgTagBegin);

    return content.substring(imgTagBegin, imgTagEnd + 1);
  }

  return "";
}

module.exports = { imageShortcode, extractFirstImage };
