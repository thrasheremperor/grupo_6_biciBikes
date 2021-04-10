console.log('vinculado');
let qs = (element) => {
    return document.querySelector(element);
}
 
window.onload = () => {
    let $form = qs('#form'),
        $name = qs('#name'),
        $nameError = qs('#nameError'),
        $lastNameError = qs('#lastNameError'),
        $lastName = qs('#lastname'),
        $email = qs('#email'),
        $emailError = qs('#emailError')
        $password = qs('#password'),
        $passwordError = qs('#passwordError'),
        $password2 = qs('#password2'),
        $passwordError2 = qs('#password2Error'),
        $date = qs('#date'),
        $dateError = qs('#dateError'),
        $terms = qs('#flexCheckDefault'),
        $termsErrors = qs('#termsErrors'),
        $file = qs('#formFile'),
        $fileErrors = qs('#fileErrors'),
        $imgPreview = qs('#img-preview'),
        regExAlpha = /^[a-zA-Z\sñáéíóúü ]+$/i,
        regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
        regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,20}$/;


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
                    $passwordError.innerHTML = 'Ingrese: entre 4 a 20 
                     caracters, minimo una mayuscula, minuscula y un numero'
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
        $terms.addEventListener('blur', () => {
            if($terms.checked){
                $termsErrors.innerHTML = ''
                $terms.value = 'on'
                $sexo.classList.remove('is-invalid');
                $sexo.classList.add('is-valid');
            } else {
                $termsErrors.innerHTML = 'Para crear una cuenta debes aceptar los términos y condiciones'
            }
        })
        $terms.addEventListener('click',function(){
            $terms.value = 'on'
            $terms.classList.toggle('is-valid');
            $terms.classList.remove('is-invalid');
            $termsErrors.innerHTML = ""
        })  
        
        $file.addEventListener('change', 
        function fileValidation(){
            let filePath = $file.value, //Capturo el valor del input
                allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //Extensiones permitidas
                if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
                $fileErrors.innerHTML = 'Extensiones validas (.jpg - .jpeg - .png - .gif)';
                $file.value = '';
                $imgPreview.innerHTML = '';
                return false;
            }else{
                // Image preview
                if($file.files && $file.files[0]){
                    let reader = new FileReader();
                    reader.onload = function(e){
                        $imgPreview.innerHTML = '<img src="' + e.target.result +'"/>';
                    };
                    reader.readAsDataURL($file.files[0]);
                    $fileErrors.innerHTML = '';
                }
            }
        })

        $form.addEventListener('submit',function(event){
            let error = false;
            event.preventDefault()

            let elementosForm = this.elements
            
            for (let index = 0; index < 6; index++) {
                if(elementosForm[index].value == ""){
                    elementosForm[index].classList.add('is-invalid');
                    submitErrors.innerHTML = "Los campos señalados son obligatorios";
                    error = true;
                }
            }
    
            if(!$terms.checked){
                $terms.classList.add('is-invalid');
                $termsErrors.innerHTML = "Debes aceptar las bases y condiciones"
                error = true
            }
    
            if(!error){
                $form.submit()
            }
    
        })
}