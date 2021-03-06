window.addEventListener('load',function(){
    
    let form = document.querySelector('#form-login');

    form.addEventListener('submit',function(event){
     event.preventDefault(); 
        guadarDatosUsuario(
            (email,pass)=>{
                alert('Datos guardados correctamente');
                window.location.replace('index.html');
            }
        );
    });
    const guadarDatosUsuario = (callback)=>{

        let email = document.querySelector('#Email');
        let pass = document.querySelector('#InputPassword');
        let emailHelp = document.querySelector('#emailHelp');
        let passHelp = document.querySelector('#passHelp');

         if(!validate(email.value)){
             emailHelp.innerHTML='El campo correo electronico esta vacio o no es valido';
             emailHelp.style.color='red';
             return true;
         }else{
             emailHelp.innerHTML='';
             emailHelp.style.color='';
         }
         if(!validate(pass.value)){
             passHelp.innerHTML='El campo password esta vacio o no es valido';
             passHelp.style.color='red';
             return true;
         }else {
             passHelp.innerHTML='';
             passHelp.style.color='';
         }
         
        let datos = {
            email: email.value,
            pass : pass.value
        };
         guardar(datos);

        return callback(email,pass);
    }

});
