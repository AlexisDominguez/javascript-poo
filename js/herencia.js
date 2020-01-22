class Cliente{
   // El constructor se encarga de definir las propiedades generales de
   // la clase, es decir, las propiedades en común que tendrán 
   // todos los objetos o métodos dentro de la clase.
   constructor(nombre, saldo){
      this.nombre = nombre;
      this.saldo = saldo;
   }

   imprimirSaldo(){
      return `Hola ${this.nombre} ${this.apellido}, tu saldo es: ${this.saldo}`;
   }

   // Los métodos státicos no requieren instanciarse
   static bienvenida(){
      return "Bienvenido al cajero";
   }
}

console.log(Cliente.bienvenida());

const alexis = new Cliente("Alexis", 200);
console.log(alexis);
console.log(alexis.imprimirSaldo());

//Heredamos la clase Cliente a la clase Empresa
class Empresa extends Cliente{
   constructor(nombre, saldo, telefono, tipo){
      super(nombre, saldo);
      this.telefono = telefono;
      this.tipo = tipo;
   }

   //Reescribimos el método de la clase Cliente utilizando el mismo nombre
   static bienvenida(){
      return "Bienvenido al cajero para empresas";
   }

}

const encinos = new Empresa("Encinos", 200000, 234934234, "Procesadora");

console.log(Empresa.bienvenida());
console.log(encinos);
console.log(encinos.imprimirSaldo());