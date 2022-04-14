/*operador de asignacion*/
let a = 1;

/*asignacion de adicion*/
a += 3; // a = a + 3
console.log(a);

/*asignacion de resta*/
a -= 2; // a = a - 2
console.log(a);

a *= 3; // a = a * 3
console.log(a);

/*asignacion de division*/
a /=2; //a = a / 2
console.log(a);

/* asignacion de residuo */
a %= 2; // a = a % 2
console.log(a) ;

/* asignacion de potencia */
a **= 0; // a = a ** 0
console.log(a);

/* operador de igual */
let d = 3, b = 3, c = "2";
 let z =  d == c; //sin importar el tipo
 console.log(z); //true

 z = d === c; //revisa el tipo 
 console.log(z)//false
 
 /*operadores de distintos */
 z = d != c; //compara si el valor es distinto 
console.log(z); //true

z = d !== c; // compara si es distinto hasta los tipos
console.log(z);

/*operadores relacionales*/
z = d < b; // d es menor a b
console.log(z); // false

z = d <= b ; // menor o igual a
console.log(z);

z = d > b ; //meyor a 
console.log(z)

z = d >= b; //meyor o igual
console.log(z);

/* operador and (&&)*/

let e = 1; 
let minval= 0 , maxval = 10;
if( e >= minval && e <= maxval  ){
    console.log("dentro de rango");
}
else{
    console.log("fuera de rango");
};

/* operador or (||) regresa true si ambos si cualquiera de los dos son true */
let si = false ,  no = false;
if (si  ||  no){
    console.log("la respuesta es si ");
}
else{
    console.log("la respuesta es no")
};
/* operador condicional ?*/
let edad = -4;
let adult = (edad >= 18 ) ? "adulto": "niño";
console.log("es un adulto");
adult = (edad <= 17 && edad >= 0) ? "adulto" : "niño";
console.log("es un niño ");
