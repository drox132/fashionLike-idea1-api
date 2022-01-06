const app = require('./app.js')

// start server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'))
})
