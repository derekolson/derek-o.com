const path = require("path");
const eleventyImage = require("@11ty/eleventy-img");

module.exports = eleventyConfig => {
    // function relativeToInputPath(inputPath, relativeFilePath) {
    //     let split = inputPath.split("/");
    //     split.pop();

    //     return path.resolve(split.join(path.sep), relativeFilePath);
    // }

    // Eleventy Image shortcode
    // https://www.11ty.dev/docs/plugins/image/
    eleventyConfig.addAsyncShortcode("image", async function imageShortcode(src, alt, sizes = "100vw", overlay = '#eee') {
        // let file = relativeToInputPath(this.page.inputPath, src);
        let metadata = await eleventyImage(path.resolve(src), {
            widths: ["800, 1920"],
            formats: ["webp", "auto"],
            outputDir: path.join(eleventyConfig.dir.output, "img"),
        });

        let imageAttributes = {
            alt,
            sizes,
            loading: "lazy",
            decoding: "async",
        };

        let options = {
            pictureAttributes: {
                style: `background-color: ${overlay};`,
            },
            whitespaceMode: "block"
        }

        return eleventyImage.generateHTML(metadata, imageAttributes, options);
    });
};