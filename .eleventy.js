const eleventyNavigation = require("@11ty/eleventy-navigation")
const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss")
const vimeoPlugin = require("./_plugins/vimeo.eleventy")
const imagePlugin = require("./_plugins/image.eleventy")


module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(eleventyNavigation)
    eleventyConfig.addPlugin(eleventySass)
    eleventyConfig.addPlugin(imagePlugin)

    eleventyConfig.addShortcode("vimeo", vimeoPlugin)

    eleventyConfig.addLayoutAlias('default', 'layouts/default.liquid')
    eleventyConfig.addLayoutAlias('project_detail', 'layouts/project_detail.liquid')

    eleventyConfig.addPassthroughCopy({
        './static': '/',
        // './img': '/img',
    })

    eleventyConfig.addCollection("projects", function(collectionApi) {
        return collectionApi.getFilteredByGlob("content/projects/*.md").filter(p => p.data.published !== false);
    });

    return {
        dir: {
            input: './content',
            output: './_site',
            includes: '../_includes',
            data: "../_data",
        },
        templateFormats: [
            'html',
            'liquid',
            'md',
            'njk',
        ],
    };
};
