(function () {
    'use strict'
  
    
    var forms = document.querySelectorAll('.needs-validation')
  
    
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
function guardar(){
    let elem = document.getElementById("name")
    let msj =""
    if(elem.value == ""){
        msj = "Debe completar el campo nombre"
    }
    else{
        msj = "Nombre ok"
    }
    
    document.getElementById("resp-nombre").innerHTML = msj
    }