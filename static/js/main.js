document.querySelectorAll('.video-wrapper').forEach(node => {
    node.addEventListener('click', (event) => {
        const id = node.dataset.id
        node.innerHTML = `<iframe id="player-${id}" src="//player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&autoplay=1&api=1" frameborder="0" allow="autoplay; fullscreen" autoplay allowfullscreen></iframe>`
    }, { once: true })
})

const lazyLoadInstance = new LazyLoad({});
