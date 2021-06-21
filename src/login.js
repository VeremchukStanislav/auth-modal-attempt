export class Login {
  static create(login) {
    return fetch('https://auth-modal-f7e24-default-rtdb.europe-west1.firebasedatabase.app/logins.json', {
      method: 'POST',
      body: JSON.stringify(login),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        login.id = response.name
        return login
      })
      .then(addToLocalStorage)
      .then(Login.renderList)
  }

  static fetch(token) {
    if (!token) {
      return Promise.resolve('<p class="error">У вас нет токена</p>')
    }
    return fetch(`https://auth-modal-f7e24-default-rtdb.europe-west1.firebasedatabase.app/logins.json?auth=${token}`)
      .then(response => response.json())
      .then(response => {
        if (response && response.error) {
          return `<p class="error">${response.error}</p>`
        }

        return response ? Object.keys(response).map(key => ({
          ...response[key],
          id: key
        })) : []
      })
  }

  static listToHTML(logins) {
    return logins.length
      ? `<ol>${logins.map(q => `<li>${q.text}</li>`).join('')}</ol>`
      : '<p>Пока ничего не смотрели</p>'
  }
}

function addToLocalStorage(login) {
  const all = getloginsFromLocalStorage()
  all.push(login)
  localStorage.setItem('logins', JSON.stringify(all))
}
