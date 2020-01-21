//Object literal (ES6)
const cliente = {
   nombre: "Juan",
   saldo : 200,
   tipoCliente: function(){
      let tipo;
      //La variable this sirve para utilizar atributos del mismo objeto
      if(this.saldo > 1000){
         tipo = "Gold";
      }else{
         tipo = "Normal"
      }
      return tipo;
   }
} 
console.log(cliente.tipoCliente());

//Método alternativo (No ES6)
/*
function Cliente(nombre, saldo){
   this.nombre = nombre;
   this.saldo = saldo;
   this.tipoCliente = function (){
      let tipo;
      if(saldo > 1000){
         tipo = "Gold";
      }else{
         tipo = "Normal";
      }
      return tipo;
   }
}
const persona = new Cliente("Juan", 200);

console.log(persona.tipoCliente());
*/