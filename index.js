var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  let n = new Date()
  response.send('Hello World! @ ' + n.toISOString())
})

app.get('/api', function(request, response) {
  let n = new Date()
  response.send(n.toISOString())
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
