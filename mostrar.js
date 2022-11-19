const agregar = document.getElementById("muestrario");
const boton1 = document.getElementById("botoncio");
const boton2 = document.getElementById("botoncio2");

let index=0;
let max_datos=0;
let pokelista=[];

boton1.onclick=function(){
    const foto = document.createElement('img');//la imagen en sí
    foto.alt=pokelista[index][1]; //alt nombre del poki
    let ruta = './db/image/('+pokelista[index][0]+').png'; //ruta de la foto
    foto.src = ruta; // ruta de la imagen
    const tarjeta = document.createElement("div");  //etiqueta div
    const textUp = pokelista[index][0]+" "+pokelista[index][1];
    let textDown = pokelista[index][2];
    if(pokelista[index][3] != "NULL"){
        textDown+=" "+pokelista[index][3];
    }
    const texto = pokelista[index][0]+" "+pokelista[index][1];
    
    tarjeta.appendChild(document.createTextNode(textUp));   //texto arriba
    tarjeta.appendChild(foto);                         //la foto
    tarjeta.appendChild(document.createTextNode(textDown));//texto abajo
    document.getElementById("muestrario").appendChild(tarjeta);//mostrar tarjeta
    index+=1;
    if (index >= max_datos){
        index=0;
    }
};

boton2.onclick=function(){
    
};

(async () => {
    const respuesta = await fetch('http://localhost:8080/pokis/');
    const data = await respuesta.json();
    max_datos = data.length;
    //console.table(data);
    console.log("largo lista: "+max_datos);
    //hacemos al arreglo bidimensional
    for(i=0;i<max_datos;i+=1){
        pokelista[i]=[];
    }
    //traemos los datos de JSON a string bidimensional
    for(i=0;i<max_datos;i+=1){
        pokelista[i][0] = data[i].id;
        pokelista[i][1] = data[i].nombre;
        pokelista[i][2] = data[i].tipo1;
        pokelista[i][3] = data[i].tipo2;
//        pokelista[i][4] = data[i].foto;
    }
})();

// con este Script llamamos a los datos del Node.js a traves de CORS
// esto de abajo llamará a NODE, ahorita a meter mano
/*
Esto trae 2 Crusaders de prueba
const crusaders =[];
(async () => {
    const respuesta = await fetch('http://localhost:8080/');
    const data = await respuesta.json();
    max_datos = data.length;
    console.table(data);
    //hacemos al arreglo bidimensional
    for(i=0;i<max_datos;i+=1){
        crusaders[i]=[];
    }
    //traemos los datos de JSON a string bidimensional
    for(i=0;i<max_datos;i+=1){
        document.getElementById('muestrario').innerHTML +=
            "<div>"+data[i].nombre+" : "+data[i].stand+"</div>";
        crusaders[i][0] = JSON.stringify(data[i].nombre);
        crusaders[i][1] = JSON.stringify(data[i].stand);
    }
    console.table(crusaders);
})();
*/