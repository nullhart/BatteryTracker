module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
        name: 'Mobile Forms V2',
        themeColor: '#1b2431',
        msTileColor: '#1b2431',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black-translucent',

        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',

        workboxOptions: {
            swSrc: 'src/service-worker.js',
            exclude: [
                /\.map$/,
                /manifest\.json$/
            ],

        }
    }
}
