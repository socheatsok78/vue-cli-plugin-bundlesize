module.exports = api => {
    api.extendPackage({
        devDependencies: {
            'bundlesize': '^0.18.1'
        }
    })

    api.render('./template')
}
