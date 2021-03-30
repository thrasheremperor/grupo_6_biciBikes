let qs = function (element) {
    return document.querySelector(element);
  };
  
  window.addEventListener("load", () => {
      let $formCarga = qs('#formCarga'),
          $name = qs('#name'),
          $nameError = qs('#nameError'),
          $make = qs('#make'),
          $makeError = qs ('#makeError'),
          $price = qs('#price'),
          $priceError = qs('#priceError'),
          $description = qs('#description'),
          $descriptionError = qs('#descriptionError'),
          $formFileLg = qs('#formFileLg'),
          $formFileLgError = qs('#formFileLgError'),
          regExAlpha = /^[a-zA-Z\sñáéíóúü ]+$/i,
          regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
          regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,42}$/;
    
  })