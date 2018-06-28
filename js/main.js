
let mail= document.getElementById("email_contacto");
 
function Saldo(){
  window.location="index3.html"
}


const botonSaldo= document.getElementById("btn5");
const vista=document.getElementById("info");



botonSaldo.addEventListener("click", event=>{
  const nroTarjeta= document.getElementById("nro").value;
  fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${nroTarjeta}`)
  .then(response=>response.json())
  .then(datos=>{
    console.log(datos);
    imprimirSaldo(datos)
  })
})

const imprimirSaldo= (datosTarjeta)=>{
  let saldoTarjeta= datosTarjeta["Saldo  tarjeta"];
  vista.innerHTML= "Tu saldo es " + saldoTarjeta;
}