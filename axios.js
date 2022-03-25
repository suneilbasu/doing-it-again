const axios = require('axios')

axios.post('https://doing-it-again.suneilbasu1.repl.co/tests', {
  word: "web",
  description: "working"
}).then(function(response) {
  console.log(response.data)
}).catch(function(error) {
  console.log(error)
})