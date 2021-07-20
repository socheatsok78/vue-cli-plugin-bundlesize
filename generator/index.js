module.exports = api => {
    api.extendPackage({
        scripts: {
            'test:bundlesize': 'bundlesize'
        },
        devDependencies: {
            'bundlesize': '^0.18.1'
        }
    });

    api.render('./template');
}
