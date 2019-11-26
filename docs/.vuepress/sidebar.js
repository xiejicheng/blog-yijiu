module.exports = {
    // 对多模块的管控

    // linux
    // '/linux/': require('../linux/sidebar'),
    '/linux/primary/': require('../linux/primary/sidebar'),
    //'/linux/sysprogm/': require('../linux/sysprogm/sidebar'),
    //'/linux/netprogm/': require('../linux/netprogm/sidebar'),
    //'linux/shell/': require('../linux/shell/sidebar'),

    // cloudnative
    //'/cloudnative/docker/': require('../cloudnative/docker/sidebar'),
    '/cloudnative/k8s/': require('../cloudnative/k8s/sidebar'),
    '/cloudnative/devops/': require('../cloudnative/devops/sidebar'),
    
    // recommend
    '/recommend/materials/': require('../recommend/materials/sidebar'),

    // booknotes
    '/booknotes/itcs/': require('../booknotes/itcs/sidebar'),

    // notes
    '/notes/network/': require('../notes/network/sidebar'),
    '/notes/golang/': require('../notes/golang/sidebar'),
}