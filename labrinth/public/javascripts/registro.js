window.addEventListener('load',function(){
    console.log('JS vinculado correctamente');

    let formulario = document.querySelector('form#registro');

    let inputNombreCompleto = formulario.querySelector('input[name="nombreCompleto"]');
    let inputPass = formulario.elements[0];
    let inputPass2 = formulario.elements[1];
    let inputEmail = formulario.elements[2];
    let inputAvatar = formulario.elements[3];
    

    let errores = {};
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    let regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;



    inputNombreCompleto.addEventListener('blur',function(){

        switch (true) {
            case this.value.length === 0:
                errorNombre.innerHTML = "Insertar nombre completo OBLIGATORIO";
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length <=3:
                errorNombre.innerHTML = "Tenés que poner al menos tres letras"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorNombre.innerHTML = ""
                break;
        }

    })
    
  

    inputPass.addEventListener('blur',function(){

        switch (true) {
            case this.value.length === 0:
                errorPass.innerHTML = "La contraseña es obligatoria";
                this.classList.add('is-invalid')
                break;
            case !regExPass.test(this.value) :
                errorPass.innerHTML = "La contraseña debe tener entre 6 y 12 caracteres, una mayúscula una minúscula y un número"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorPass.innerHTML = ""
                break;
        }

    })

    inputPass2.addEventListener('blur',function(){

        switch (true) {
            case this.value.length === 0:
                errorPass2.innerHTML = "Reingrese su contraseña";
                this.classList.add('is-invalid')
                break;
            case this.value !== inputPass.value :
                errorPass2.innerHTML = "Las contraseñas no coinciden"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorPass2.innerHTML = ""
                break;
        }

    })

    inputEmail.addEventListener('blur',function(){

        switch (true) {
            case this.value.length === 0:
                errorEmail.innerHTML = "El campo email es obligatorio";
                this.classList.add('is-invalid')
                break;
            case !regExEmail.test(this.value) :
                errorEmail.innerHTML = "Debes escribir un email válido"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorEmail.innerHTML = ""
                break;
        }

    })

    inputAvatar.addEventListener('change',function(e){

        switch (true) {
            case !regExExtensions.exec(this.value) :
                errores.foto = "Solo imagenes con extension jpg, jpeg, png, o gif"
                errorFoto.innerHTML = errores.foto;
                this.classList.add('is-invalid')
                this.value = '';
                vistaPrevia.src = "";
            break
        
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorImagen.innerHTML = "";
                // Creamos el objeto de la clase FileReader
                let reader = new FileReader();
                // Leemos el archivo subido y se lo pasamos a nuestro fileReader
                reader.readAsDataURL(e.target.files[0]);
                // Le decimos que cuando este listo ejecute el código interno
                reader.onload = function(){
                vistaPrevia.src = reader.result;
                };
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorImagen.innerHTML = "";

        }
    })

    formulario.addEventListener('submit',function(e){
        e.preventDefault();
        let elementos = formulario.elements
        let error = false
        for (let index = 0; index < elementos.length-1; index++) {
            if(elementos[index].value == 0){
                elementos[index].classList.add('is-invalid');
               error = true;
            }
        }
        if(!error){
            formulario.submit()
        }else{
            msgError.innerHTML = "Los campos señadados son obligatorios"
        }
    })



})