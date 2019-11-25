module.exports = [
    {
        text: 'Linux 学习', link: '/linux/',
        items: [
            { text: 'Linux 入门', link: '/linux/primary/' },
            { text: 'Linux 系统编程', link: '/linux/sysprogm/' },
            { text: 'Linux 网络编程', link: '/linux/netprogm/' },
            { text: 'Linux 脚本', link: '/linux/shell/' },

            { text: '', link: '' },
        ]
    },

    {
        text: '云原生学习', link: '/cloudnative/',
        items: [
            { text: 'Docker', link: '/cloudnative/docker/' },
            { text: 'Kubernetes', link: '/cloudnative/k8s/' },
            { text: 'Istio', link: '/cloudnative/istio/' },
            { text: 'Serverless', link: '/cloudnative/serverless/' },
            {text: 'DevOps', link: '/cloudnative/devops/'},
            { text: '其他', link: '/cloudnative/othercn/' },
            { text: '', link: '' },
        ]
    },

    {
        text: '学习笔记', link: '/notes/',
        items: [
            { text: '操作系统原理', link: '/notes/os/' },
            { text: '计算机网络', link: '/notes/network/' },
            { text: '数据结构与算法', link: '/notes/coding/' },
            { text: 'Golang', link: '/notes/golang/' },

            { text: '', link: '' },
        ]
    },

    {
        text: '实战笔记', link: '/combat/',
        items: [
            { text: 'LVS 实战', link: '/combat/lvs1/' },
            { text: 'Zabbix 实战', link: '/combat/zabbix/' },
            { text: 'Nginx 实战', link: '/combat/nginx/' },

            { text: '', link: '' },
        ]
    },

    {
        text: '读书笔记', link: '/booknotes',
        items: [
            { text: 'Unix/Liunx 编程实践教程', link: '/booknotes/unix-linux/' },
            { text: 'APUE', link: '/booknotes/apue/' },
            { text: 'UNP', link: '/booknotes/unp/' },
            { text: '自己动手写 Docker', link: '/booknotes/dockering/' },
            { text: 'Python Linux系统管理与自动化运维', link: '/booknotes/python-ops/' },
            { text: '计算机系统基础', link: '/booknotes/itcs/' },

            { text: '', link: '' },

        ]

    },

    {
        text: '优秀推荐', link: '/recommend/',
        items: [
            { text: 'VuePress', link: 'https://vuepress.vuejs.org/' },
            { text: 'CNCF计算基金会', link: 'https://www.cncf.io/' },
            { text: '开发者头条', link: 'https://toutiao.io/' },
            { text: '资料推荐', link: '/recommend/materials/' },
            
            { text: '', link: '' },
        ]
    }

]