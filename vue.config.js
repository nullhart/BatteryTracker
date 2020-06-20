module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
        name: 'Mobile Forms V2',
        themeColor: '#111b29',
        msTileColor: '#111b29',
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
