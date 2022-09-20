//Testeo XD
const x = 1;
const y = 2;
const z = x + y;

console.log(function1())  //sincrono espera
console.log(function2())

//JavaScript es un lenguaje asincrono(el mas rápido gana)

"1 2"
"2 1"


//Promesas//Promise
fetch("http://localhost:3000/comments/1")
  .then(response =>{
  //response header y body

}).catch(response =>{
  //header y body

})

const function1 = () =>{
  //demora 30s
  //test
  return "1"
}

const function2 = () => {
  return "2"
}