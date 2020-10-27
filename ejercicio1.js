//problema 1
//funcion parametros name, lastName, userId, que devuelva un string
//con iniciales, nombre completo, y userId
let name = prompt("ingrese nombre: ").toLowerCase();
let lastName = prompt("ingrese apellido: ").toLowerCase();
let userId = Number(prompt("ingrese numero de usuario: "));

    //se llama la funcion user
user(name, lastName, userId);

    //funcion user
function user(name, lastName, userId) {
  let regName = /[a-zA-Z]/.test(name);
  let regLast = /[a-zA-Z]/.test(lastName);
  let regId = /[0-9]/.test(userId);
  
  if (regName && regLast && regId) {
    let iniciales = [];
    let arr = name.split(" ");
    arr.forEach((name) => {
      iniciales.push(name[0][0].toUpperCase());
    });
    iniciales.push(lastName[0].toUpperCase());

    console.log(iniciales.join("."), `${name} ${lastName}, ${userId}`);

    } else {
        alert("datos ingresados incorrectos");
        console.log("Error")
    }
}