const testEmail = "laspatasdecamille@gmail.com",
    testPassword = "123456"

const getEmail = document.getElementById("email"),
    getPassword = document.getElementById("password"),
    getEmailAlert = document.getElementById("emailAlert"),
    getPasswordAlert = document.getElementById("passwordAlert"),
    visibilityControl = document.getElementById("fa-eye"),
    submitButton = document.getElementById("submitButton");

    function validarEmail() {//Verifica que el email es válido y correcto
        if (getEmail.value === '') {
            //Mostrar alerta campo no puede estar vacio
            getEmailAlert.textContent = "Email no válido";
            getEmail.style.borderBottom = "1px solid #bc0909";
            return 0;
        }else if(getEmail.value !== testEmail ){
            //Mostrar alerta contraseña incorrecta
            getEmailAlert.textContent = "Email incorrecto";
            getEmail.style.borderBottom = "1px solid #bc0909";
            return 0;
        }
        return 1;
        
    }

    function validarContraseña() { //Verifica que la contraseña es válida y correcta

        if (getPassword.value === '') {
            //Mostrar alerta campo no puede estar vacio
            getPasswordAlert.textContent = "Contraseña no válida";
            getPassword.style.borderBottom = "1px solid #bc0909";
            return 0;
        }else if(getPassword.value !== testPassword ){
            //Mostrar alerta contraseña incorrecta
            getPasswordAlert.textContent = "Contraseña incorrecta";
            getPassword.style.borderBottom = "1px solid #bc0909";
            return 0;
        }
        return 1;

    }

    

    function jump() {//Redirecciona en caso de que las credenciales sean correctas
        
        
        if (validarEmail() + validarContraseña() === 2) {
            location.href = "index.html";
        }
    }


    //Eventos
    getEmail.addEventListener("click", e => {
        e.preventDefault(); 
        getEmail.style.borderBottom = "1px solid #096abc" ;
        getEmailAlert.textContent = ""
    })

    getPassword.addEventListener("click", e => {
        e.preventDefault(); 
        getPassword.style.borderBottom = "1px solid #096abc" ;
        getPasswordAlert.textContent = ""
    })

    visibilityControl.addEventListener("click", e =>{
        e.preventDefault();
        if (getPassword.type === "password") {
            getPassword.type = "text";
            visibilityControl.classList.remove("fa-eye");
            visibilityControl.classList.add("fa-eye-slash");
        }else if(getPassword.type === "text"){
            getPassword.type = "password";
            visibilityControl.classList.add("fa-eye");
            visibilityControl.classList.remove("fa-eye-slash");
        }
        
    })

    submitButton.addEventListener("click", e => {e.preventDefault(); jump();});



