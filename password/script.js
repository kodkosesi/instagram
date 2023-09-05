let passwordIsVisible = false
const input = document.getElementById('password')

const btn = document.getElementById('password-check-area')

const togglePasswordIsVisible = () => {
    input.type = passwordIsVisible ? 'text' : 'password'
    btn.innerHTML = `
        <i class="fa fa-${passwordIsVisible ? 'eye' : 'eye-slash'}"></i>
    `
    passwordIsVisible = !passwordIsVisible
}

window.onload = () => togglePasswordIsVisible()