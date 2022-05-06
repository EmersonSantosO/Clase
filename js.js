let funcion = () => {
    let arreglo = []
    //llenando el arreglo
    //arreglo[0] =document.getElementById("input1").value
    //arreglo[1] =document.getElementById("input2").value
    //arreglo[2] =document.getElementById("input3").value     
    //arreglo[3] =document.getElementById("input4").value
    for(let i =0; i < 4; i++){
        arreglo[i] = document.getElementById("input-"+(i+1))}
}
//escribir en pantalla
for(let j = 0; j < 4; j++){
    window.setTimeout( function(){
        document.getElementById("p-"+(j+1)).innerHTML = 
        arreglo[j]
    },1000)
}