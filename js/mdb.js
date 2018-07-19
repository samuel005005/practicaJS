function guardar(datos){
        let datosString= JSON.stringify(datos);
        console.log(datos);
        localStorage.setItem('info-'+datos.usuario,datosString);
    return true;
}

function getUsuario(usuario){
   return localStorage.getItem('info-'+usuario);
}

