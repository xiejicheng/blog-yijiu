module.exports = {
    title: '我的学习记录',
    description: 'O Captain, my Captain.',
    dest: './dist',
    port: '7777',
    head: [
        ['link', { rel: 'icon', href: '/img/c.png' }],
        ['link', { rel: 'stylesheet', href: '/css/style.css'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require("./nav.js"),
        sidebar: require("./sidebar.js"),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}
