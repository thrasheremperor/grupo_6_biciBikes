console.log('Vinculado')
let qs = (element) => {
    return document.querySelector(element);
}

window.onload = () => {
    let $inputname = qs('#inputname'),
    $nameError = qs('#nameError'),
    $inputmake = qs('#inputmake'),
    $makeError = qs('#makeError'),
    $inputprice = qs('#inputprice'),
    $priceError = qs('#priceError'),
    $description = qs('#description'),
    $descriptionError = qs('#descriptionError'),
    $formFileLg =qs('#formFileLg'),
    $formFileLgError =('#formFileLgError'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]+$/i,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,42}$/;

    $inputname.onblur = () => {
        switch (true) {
            case !$inputname.value.trim():
                $nameError.innerHTML = "campo requerido"
                $inputname.classList.add('is-invalid')
                
                break;
            case !regExAlpha.test($inputname.value):
                $inputname.innerHTML = 'Tu nombre no es valido'
                $inputname.classList.add('is-invalid')
            break;    
        
            default:
                $inputname.classList.remove('is-invalid')
                $inputname.classList.add('is-valid')
                $nameError.innerHTML = null
                break;
        }
    }

    

    
   

 }
    
