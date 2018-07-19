window.addEventListener('load',function(){
    
    let frmlogin = document.querySelector('#form-login');

    frmlogin.addEventListener('submit',function(event){
     event.preventDefault(); 
        guadarDatosUsuario(
            (usuario,pass)=>{
                alert('Datos guardados correctamente');
                window.location.replace('index.html');
            }
        );
    });
    const guadarDatosUsuario = (callback)=>{

        let usuario = document.querySelector('#usuario');
        let pass = document.querySelector('#InputPassword');
        let usuariolHelp = document.querySelector('#usuariolHelp');
        let passHelp = document.querySelector('#passHelp');

         if(!validate(usuario.value)){
             usuariolHelp.innerHTML='El campo Usuario esta vacio o no es valido';
             usuariolHelp.style.color='red';
             return true;
         }
         if(!validate(pass.value)){
             passHelp.innerHTML='El campo password esta vacio o no es valido';
             passHelp.style.color='red';
             return true;
         }
         
        let datos = {
            usuario : usuario.value,
            pass : pass.value
        };
         guardar(datos);

        return callback(usuario,pass);
    }

});
