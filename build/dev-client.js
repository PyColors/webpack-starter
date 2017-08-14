const hotClient = require('webpack-hot-middleware/client')

// for a few events
hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
