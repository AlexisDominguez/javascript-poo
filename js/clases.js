class Cliente{
   // El constructor se encarga de definir las propiedades generales de
   // la clase, es decir, las propiedades en común que tendrán 
   // todos los objetos o métodos dentro de la clase.
   constructor(nombre, apellido,saldo){
      this.nombre = nombre;
      this.apellido = apellido;
      this.saldo = saldo;
   }

   imprimirSaldo(){
      return `Hola ${this.nombre} ${this.apellido}, tu saldo es: ${this.saldo}`;
   }

   tipoCliente(){
      let tipo;
      if(this.saldo > 1000){
         tipo = "Cliente Gold";
      }else if(this.saldo > 500){
         tipo = "cliente Silver";
      }else{
         tipo = "Cliente Normal";
      }
      return tipo;
   }

   retiroSaldo(retiro){
      return this.saldo -= retiro;
   }

   // Los métodos státicos no requieren instanciarse
   static bienvenida(){
      return "Bienvenido al cajero";
   }
}

// Se crea una nueva instancia de la clase Cliente bajo el nombre clienteAlexis
const clienteAlexis = new Cliente("Alexis", "Dominguez", 2000);
clienteAlexis.retiroSaldo(300);

// El método estático se instancia directamente bajo el nombre de la clase
// No es necesario utilizar la nueva instancia
console.log(Cliente.bienvenida());

console.log(clienteAlexis.imprimirSaldo());
console.log(clienteAlexis.tipoCliente());
