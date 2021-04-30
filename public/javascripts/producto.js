console.log('VINCULADO')
let qs = (element) => {
    return document.querySelector(element);
}

window.onload = () => {
    let $formCarga = qs('#formCarga'), 
    $inputname = qs('#inputname'),
    $nameError = qs('#nameError'),
    $inputmake = qs('#inputmake'),
    $makeError = qs('#makeError'),
    $color = qs('#color'),
    $colorError =qs('#colorError'),
    $category = qs('#category'),
    $categoryError = qs('#categoryError'),
    $discount = qs('#discount'),
    $discountError = qs('#discountError'),
    $price = qs('#price'),
    $priceError = qs('#priceError'),
    $description = qs('#description'),
    $descriptionError = qs('#descriptionError'),
    $file =qs('#file'),
    $fileErrors =('#fileError'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]+$/i,
    regExLetter = /^[\s\S]{0,200}$/;
     

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
                $makeError.innerHTML = "Selecciona una marca"
                $inputmake.classList.add('is-invalid')              
                break;
               
            default:
                $inputmake.classList.remove('is-invalid')
                $inputmake.classList.add('is-valid')
                $makeError.innerHTML = null
                break;
        }
    }

    $category.onblur = () => {
        switch (true) {
            case !$category.value.trim():
                $categoryError.innerHTML = "Seleccione una categoria"
                $category.classList.add('is-invalid')
                
                break;   
            default:
                $category.classList.remove('is-invalid')
                $category.classList.add('is-valid')
                $categoryError.innerHTML = null
                break;
        }
    }

    $color.addEventListener('blur',function(){
        if(!$color.value.trim()){
            $colorError.innerHTML = "Seleccione color"
            $color.classList.add('is-invalid')
        }else{
            $color.classList.remove('is-invalid')
            $color.classList.add('is-valid')
            $colorError.innerHTML = null
        }
    })

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

    $description.onblur = () => {
        switch (true) {
            case !$description.value.trim():
                $descriptionError.innerHTML = "Recomendamos una descripcion"
                $description.classList.add('is-invalid')
                
                break;
             case !regExLetter.test($description.value):
                 $descriptionError.innerHTML = "Maximo 200 caracteres"
                 $description.classList.add('is-invalid')

             break;   
            default:
                $description.classList.remove('is-invalid')
                $description.classList.add('is-valid')
                $descriptionError.innerHTML = null
                break;
        }
    }

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

    $formCarga.addEventListener('submit',function(event){
        let error = false;
        event.preventDefault()

        let elementosForm = this.elements
        
        for (let index = 0; index < 6; index++) {
            if(elementosForm[index].value == ""){
                elementosForm[index].classList.add('was-validated');
                submitErrors.innerHTML = "hay campos incompletos";
                error = true;
            }
        }
        if(!error){
            $formCarga.submit()
        }

    })
}