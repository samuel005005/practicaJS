window.addEventListener('load',function(){
    
    let frmlogin = document.querySelector('#form-login');

    frmlogin.addEventListener('submit',function(event){
     event.preventDefault(); 
     login(
            ()=>{
               // alert('Datos guardados correctamente');
               window.location.replace('index.html');
            }
        );
    });
    const login = (callback)=>{

            let usuario = document.querySelector('#usuario');
            
            let usuariolHelp = document.querySelector('#usuariolHelp');
            if(!validate(usuario.value)){
                usuariolHelp.innerHTML='El campo Usuario esta vacio';
                usuariolHelp.style.color='red';
                return true;
            }else{
                usuariolHelp.innerHTML='';
                usuariolHelp.style.color='';
            }

         let pass = document.querySelector('#InputPassword');
         let passHelp = document.querySelector('#passHelp');

         if(!validate(pass.value)){
             passHelp.innerHTML='El campo password esta vacio o no es valido';
             passHelp.style.color='red';
             return true;
         }
         
        let guadarDatosUsuario= getUsuario(usuario.value);
        let validation_login=  document.querySelector('#validation-login');  

            if(guadarDatosUsuario ==null){
                usuariolHelp.innerHTML='Usuario incorrecto';
                usuariolHelp.style.color='red';
                return true;
            }else{
                usuariolHelp.innerHTML='';
                usuariolHelp.style.color='';
            }
            
            if(pass.value !=JSON.parse(guadarDatosUsuario).pass){
                passHelp.innerHTML='Usuario incorrecto';
                passHelp.style.color='red';
                return true;
            }
        return callback();
    }





});
