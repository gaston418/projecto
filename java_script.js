function mostrar_des(){
    document.getElementById("desplazamiento").style.display="block";
    
}
function ocultar_des(){
    document.getElementById("desplazamiento").style.display="none";
}
function ir_arriba(){
    window.addEventListener("scroll",()=>{
        var scroll = document.documentElement.scrollTop; 
        /*console.log(scroll);*/
        var hacia_arriba = document.getElementById("hacia_arriba");
        if(scroll>325){
            hacia_arriba.style.display="block";
        }
         else{
            hacia_arriba.style.display="none";
         }
    })
}
ir_arriba();