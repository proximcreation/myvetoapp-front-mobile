console.log(cordova)
console.log('MOBAPP : cordova loaded')
var mobapp = {
  initialize: function () {
    console.log('MOBAPP : mobapp initialised')
    this.bindEvents()
  },
  bindEvents: function () {
    document.addEventListener('deviceready', this.onDeviceReady, true)
  },
  onDeviceReady: function () {
    console.log('MOBAPP : device ready')
    // try {
    //   StatusBar.overlaysWebView(false)
    //   StatusBar.backgroundColorByName('black')
    // } catch (e) {
    //   console.log(e)
    // }
    // StatusBar.styleBlackTranslucent();
  }
}
mobapp.initialize()
