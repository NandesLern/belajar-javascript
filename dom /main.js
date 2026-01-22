const usernameInput = document.getElementById('usernameInput')
const nimInput = document.getElementById('nimInput')
const passwordInput = document.getElementById('passwordInput')
const loginBtn = document.getElementById('loginBtn')
const loginStatus = document.getElementById('loginStatus')


loginBtn.addEventListener('click', function () {
    const username = usernameInput.value
    const nim = nimInput.value
    const password = passwordInput.value

    if (username === 'nandes' && nim === '12345678910' && password === '12345') {
        loginStatus.textContent = ('Login berhasil')
        loginStatus.style.color = 'blue'
    } else {
        loginStatus.textContent = 'Username atau Password atau nim salah'
        loginStatus.style.color = 'red'

    }
})
