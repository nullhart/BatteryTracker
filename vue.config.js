module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
        name: 'Battery Tracker',
        themeColor: '#212121',
        msTileColor: '#212121',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',

        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',

        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: './src/service-worker.js',


        }
    }
}
