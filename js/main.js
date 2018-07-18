window.addEventListener('load',function(){
    
    //  let guardarDatosUsuario = (nombre,pass,funcion)=>{
    //     guardar(nombre,pass);
    //     funcion();
    // }
    
    // guardarDatosUsuario("Samuel","paez",function(datos){
    //     console.ogo
    // });


    // JSON.stringify(datosUsuario)

    

    function test(){
         return new Promise(function(done){
            for (let index = 0; index < 10; index++) {
                console.log(index);
              }   
            setTimeout(function(){ 
                done(); 
             }, 3000)
         });
      
    }
    test().then(function(){
        for (let index = 0; index < 5; index++) {
            console.log(index);
        }
    });

});