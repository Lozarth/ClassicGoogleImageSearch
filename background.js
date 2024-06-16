browser.menus.create({
    id: 'search-image',
    title: 'Search image with Google',
    contexts: ['image']
})

browser.menus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === 'search-image') {
        const imageUrl = info.srcUrl

        const searchUrl = 'https://www.google.com/searchbyimage?sbisrc=cr_1_5_2&image_url=' + imageUrl

        browser.tabs.create({ url: searchUrl })
    }
})