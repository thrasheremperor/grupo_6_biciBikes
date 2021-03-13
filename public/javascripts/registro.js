let qs = (element) => {
    return document.querySelector(element);
}

window.onload = () => {
    let $name = qs('#name'),
        $nameError = qs('#nameError'),
        $lastNameError = qs('#lastNameError'),
        $lastName = qs('#lastname'),
        $email = qs('#email'),
        $emailError = qs('#emailError')
        $password = qs('#password'),
        $passwordError = qs('#passwordError'),
        $password2 = qs('#password2'),
        $passwordError2 = qs('#passwordError2'),
        $date = qs('#date'),
        $dateError = qs('#dateError'),
        regExAlpha = /^[a-zA-Z\sñáéíóúü ]+$/i,
        regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
        regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

        $name.onblur = () => {
            switch (true) {
                case !$name.value.trim():
                    $nameError.innerHTML = 'Debe ingresar su nombre'
                    $name.classList.add('is-invalid')
                    break;
                case !regExAlpha.test($name.value):
                    $nameError.innerHTML = 'Debe ingresar un nombre valido'
                    $name.classList.add('is-invalid')
                    break;
                default:
                    $name.classList.remove('is-invalid')
                    $name.classList.add('is-valid')
                    $nameError.innerHTML = null
                    break;
            }
        }
        $lastName.onblur = () => {
            switch (true) {
                case !$lastName.value.trim():
                    $lastNameError.innerHTML = 'Debe ingresar su apellido'
                    $lastName.classList.add('is-invalid')
                    break;
                case !regExAlpha.test($lastName.value):
                    $lastNameError.innerHTML = 'Debe ingresar un apellido valido'
                    $lastName.classList.add('is-invalid')
                    break;
                default:
                    $lastName.classList.remove('is-invalid')
                    $lastName.classList.add('is-valid')
                    $lastNameError.innerHTML = null
                    break;
            }
        }
        $email.onblur = () => {
            switch (true) {
                case !$email.value.trim():
                    $emailError.innerHTML = 'Debe ingresar su email'
                    $email.classList.add('is-invalid')
                    break;
                case !regExEmail.test($email.value):
                    $emailError.innerHTML = 'Debe ingresar un email valido'
                    $email.classList.add('is-invalid')
                    break;
                default:
                    $email.classList.remove('is-invalid')
                    $email.classList.add('is-valid')
                    $emailError.innerHTML = null
                    break;
            }
        }
        $password.onblur = () => {
            switch (true) {
                case !$password.value.trim():
                    $passwordError.innerHTML = 'Debe ingresar una contraseña'
                    $password.classList.add('is-invalid')
                    break;
                case !regExPass.test($password.value):
                    $passwordError.innerHTML = 'La contraseña debe contener: entre 6 o 12 caracters, minimo una mayuscula, una minuscula y un numero'
                    $password.classList.add('is-invalid')
                    break;
                default:
                    $password.classList.remove('is-invalid')
                    $password.classList.add('is-valid')
                    $passwordError.innerHTML = null
                    break;
            }
        }
        $password2.onblur = () => {
            switch (true) {
                case !$password2.value.trim():
                    $passwordError2.innerHTML = 'Debes repetir tu contraseña'
                    $password2.classList.add('is-invalid')
                    break;
                case $password2.value != $password.value:
                    $passwordError2.innerHTML = 'Contraseñas no coinciden'
                    $password2.classList.add('is-invalid')
                    break;
                default:
                    $password2.classList.remove('is-invalid')
                    $password2.classList.add('is-valid')
                    $passwordError2.innerHTML = null
                    break;
            }
        }
        
        $date.onblur = () => {
            switch (true) {
                case !$date.value.trim():
                    $dateError.innerHTML = 'Debes ingresar su fecha de nacimiento'
                    $dateError.classList.add('is-invalid')
                    break;
                case moment($date.value) > moment():
                    $dateError.innerHTML = 'Invalid Date'
                    $date.classList.add('is-invalid')
                    break;
                case moment().diff(moment($date.value), 'years') < 18:
                    $dateError.innerHTML = 'Debes ser mayor de 18'
                    $date.classList.add('is-invalid')
                    break;
                default:
                    $date.classList.remove('is-invalid')
                    $date.classList.add('is-valid')
                    $dateError.innerHTML = null
                    break;
            }
        }
}