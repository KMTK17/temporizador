document.getElementById('iniciar').addEventListener('click',()=>{

   
   const seg = document.getElementById('tiempo').value;
   
   const tempo  = document.getElementById('tempo');

    function temporizador(seg){
        if (seg === 0){
             return tempo.textContent = 'Fin';
        }else{
            tempo.textContent=seg
            return  setTimeout(temporizador,1000,seg-1);
            
        }
    }

    temporizador(seg);
    
})