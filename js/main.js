document.querySelectorAll('.videoWrapper').forEach(node => {
    node.addEventListener('click', (event) => {
        const id = node.dataset.id
        node.innerHTML = `<iframe id="player${id}" src="//player.vimeo.com/video/${id}?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;api=1" frameborder="0" webkitAllowFullScreen mozallowfullscreen autoPlay allowFullScreen></iframe>`
    })
})

const lazyLoadInstance = new LazyLoad({});
