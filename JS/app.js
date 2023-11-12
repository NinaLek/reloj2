const horaActual = document.getElementById('hora');
const fechaActual = document.getElementById('fecha');
const cambioFormato = document.getElementById('cambiarFormato');
const cambioFormatoFecha = document.getElementById('cambiarFormatoFecha');
let doce = false;
let fechaLarga = true;

const mostrarHora= ()=>{
    const fecha=new Date();
    let hs = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    const dias=['Domingo','Lunes','Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    let dia= fecha.getDate();
    let diaSemana = dias[fecha.getDay()];
    let mes= (fecha.getMonth()+1);
    let anio = fecha.getFullYear();
    if(fechaLarga){
        fechaActual.innerHTML=`${diaSemana}, ${dia} de ${meses[mes]} de ${anio}`
    }else{
        anio = (fecha.getFullYear()-2000);
        fechaActual.innerHTML = `${dia}/${mes}/${anio}`;
    }
    if(doce){
        let amPM = 'AM';
        if(hs>12){
            hs-=12;
            amPM = 'PM';
        }
        horaActual.innerHTML=`${formatoHora(hs)}:${min} ${amPM}`;
    }else{
        horaActual.innerHTML=`${hs}:${min}:${seg}`;

    }

}
function formatoHora(hora){
    if(hora<10){
        hora = '0'+hora;
    }
    return hora;
}

cambioFormato.addEventListener('click', ()=> doce? doce = false : doce = true);
cambioFormatoFecha.addEventListener('click', ()=> fechaLarga? fechaLarga = false : fechaLarga = true);

setInterval(mostrarHora,1000);

window.onload(mostrarHora());