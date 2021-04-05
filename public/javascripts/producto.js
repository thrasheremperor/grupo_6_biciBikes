console.log('Vinculado')
let qs = (element) => {
    return document.querySelector(element);
}

window.onload = () => {
    let $inputname = qs('#inputname'),
    $nameError = qs('#nameError'),
    $inputmake = qs('#inputmake'),
    $makeError = qs('#makeError'),
    $price = qs('#price'),
    $priceError = qs('#priceError'),
    $description = qs('#description'),
    $descriptionError = qs('#descriptionError'),
    $formFileLg =qs('#formFileLg'),
    $formFileLgError =('#formFileLgError'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]+$/i,
    regExLetter = /^[\s\S]{0,2}$/;

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

    $inputmake.onblur = () => {
        switch (true) {
            case !$inputmake.value.trim():
                $makeError.innerHTML = "Marca de la bici"
                $inputmake.classList.add('is-invalid')
                
                break;
            case !regExAlpha.test($inputmake.value):
                $inputmake.innerHTML = 'Tu nombre no es valido'
                $inputmake.classList.add('is-invalid')
            break;    
        
            default:
                $inputmake.classList.remove('is-invalid')
                $inputmake.classList.add('is-valid')
                $makeError.innerHTML = null
                break;
        }
    }

    $description.onblur = () => {
        switch (true) {
            case !$description.value.trim():
                $descriptionError.innerHTML = "breve description del producto"
                $description.classList.add('is-invalid')
                
                break;
             case !regExLetter.test($description.value):
                 $description.innerHTML = "Maximo 200 caracteres"
                 $description.classList.add('is-invalid')

             break;   
            default:
                $description.classList.remove('is-invalid')
                $description.classList.add('is-valid')
                $descriptionError.innerHTML = null
                break;
        }
    }

    $price.onblur = () => {
        switch (true) {
            case !$price.value.trim():
                $priceError.innerHTML = "Coloca un precio"
                $price.classList.add('is-invalid')
                
                break;
            default:
                $price.classList.remove('is-invalid')
                $price.classList.add('is-valid')
                $priceError.innerHTML = null
                break;
        }
    }

    $formFileLg.onblur = () => {
        switch (true) {
            case !$formFileLg.value.trim():
                $formFileLgError.innerHTML = "campo requerido"
                $formFileLg.classList.add('is-invalid')
                
                break;
        
            default:
                $formFileLg.classList.remove('is-invalid')
                $formFileLgError.classList.add('is-valid')
                $formFileLgError.innerHTML = null
                break;
        }
    }

    

    
   

 }
    
