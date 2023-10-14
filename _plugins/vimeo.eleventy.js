const EleventyFetch = require("@11ty/eleventy-fetch")

module.exports = async function(vimeoId) {
    const [ data ] = await EleventyFetch(`https://vimeo.com/api/v2/video/${vimeoId}.json`, {
        duration: "1d",
        type: "json",
    });

    const thumbnail = data?.thumbnail_large;

    return `<div class="video-wrapper lazy" data-id="${vimeoId}" data-bg="${thumbnail}"><div class="play-button"></div></div>`
}
