const https = require('https')

function sendUserInfo(username, organization, password, cookie) {
  const data = JSON.stringify({
    username: username,
    organization: organization,
    password: password
  })

  const options = {
    hostname: 'yourserver.com',
    port: 443,
    path: '/api/confirm',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      Cookie: cookie
    }
  }

  const req = https.request(options, (res) => {
    let responseData = ''

    res.on('data', (chunk) => {
      responseData += chunk
    })

    res.on('end', () => {
      try {
        const response = JSON.parse(responseData)
        console.log('Confirmation number:', response.confirmationNumber)
      } catch (error) {
        console.error('Error parsing response:', error)
      }
    })
  })

  req.on('error', (error) => {
    console.error('Request error:', error)
  })

  req.write(data)
  req.end()
}

function registerUser(username, password, email, cookie) {
  const data = JSON.stringify({
    username: username,
    password: password,
    email: email
  })

  const options = {
    hostname: 'yourserver.com',
    port: 443,
    path: '/api/register',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      Cookie: cookie
    }
  }

  const req = https.request(options, (res) => {
    let responseData = ''

    res.on('data', (chunk) => {
      responseData += chunk
    })

    res.on('end', () => {
      try {
        const response = JSON.parse(responseData)
        console.log('Registration successful:', response)
      } catch (error) {
        console.error('Error parsing response:', error)
      }
    })
  })

  req.on('error', (error) => {
    console.error('Request error:', error)
  })

  req.write(data)
  req.end()
}
