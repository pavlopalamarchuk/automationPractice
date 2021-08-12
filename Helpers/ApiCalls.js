const fetch = require('node-fetch');
const apiCalls = {}

apiCalls.logIn = async function(url, data) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data)

  })
}

apiCalls.logOut = async function(url) {
    return fetch(url)
  }
  
module.exports = apiCalls