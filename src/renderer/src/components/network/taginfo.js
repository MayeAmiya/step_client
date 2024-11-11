async function fetchUserData() {
  const cookies = document.cookie.split(';').reduce((cookies, cookie) => {
    const [name, value] = cookie.split('=').map((c) => c.trim())
    cookies[name] = value
    return cookies
  }, {})

  try {
    const response = await fetch('https://yourdomain.com/api/userdata', {
      // Ensure to replace 'yourdomain.com' with the actual domain
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${cookies['authToken']}`
      }
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    console.log('User Data:', data)
    // Process the data as needed
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
}

async function fetchTagInfo(tagId) {
  const cookies = document.cookie.split(';').reduce((cookies, cookie) => {
    const [name, value] = cookie.split('=').map((c) => c.trim())
    cookies[name] = value
    return cookies
  }, {})

  try {
    const response = await fetch(`https://yourdomain.com/api/tags/${tagId}`, {
      // Ensure to replace 'yourdomain.com' with the actual domain
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${cookies['authToken']}`
      }
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const tagData = await response.json()
    console.log('Tag Data:', tagData)
    // Process the tag data as needed
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
}

async function fetchTagsData(tagIds) {
  const cookies = document.cookie.split(';').reduce((cookies, cookie) => {
    const [name, value] = cookie.split('=').map((c) => c.trim())
    cookies[name] = value
    return cookies
  }, {})

  try {
    const responses = await Promise.all(
      tagIds.map((tagId) =>
        fetch(`https://yourdomain.com/api/tags/${tagId}`, {
          // Ensure to replace 'yourdomain.com' with the actual domain
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${cookies['authToken']}`
          }
        })
      )
    )

    const tagsData = await Promise.all(
      responses.map((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
    )

    console.log('Tags Data:', tagsData)
    // Process the tags data as needed
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
}
