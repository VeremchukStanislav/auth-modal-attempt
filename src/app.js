import {Login} from './login'
import {createModal} from './utils'
import {authWithEmailAndPassword, getAuthForm} from './auth'
import './styles.css'

const modalBtn = document.getElementById('modal-btn')


modalBtn.addEventListener('click', openModal)


function openModal() {
  createModal('Авторизация', getAuthForm())
  document
    .getElementById('auth-form')
    .addEventListener('submit', authFormHandler, {once: true})
}

function authFormHandler(event) {
  event.preventDefault()

  const btn = event.target.querySelector('button')
  const email = event.target.querySelector('#email').value
  const password = event.target.querySelector('#password').value

  btn.disabled = true
  authWithEmailAndPassword(email, password)
    .then(Login.fetch)
    .then(renderModalAfterAuth)
    .then(() => btn.disabled = false)
}

function renderModalAfterAuth(content) {
  if (typeof content === 'string') {
    createModal('Ошибка!', content)
  } else {
    createModal('Список фильмов', Login.listToHTML(content))
  }
}
