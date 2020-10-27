//problema 2
//funcion que pida al usuario mediante prompt porcentaje de manejo de habilidades
// HTML, CSS, JS, ingles, devolver el promedio
// "tu promedio de conocimientos es de 86.25%"

 function promedio() {
     const arr = []
     alert("ingresar numeros del 1 al 100")
     arr.push(Number(prompt("HTML knowledge: ")));
     arr.push(Number(prompt("CSS knowledge: ")));
     arr.push(Number(prompt("JS knowledge: ")));
     arr.push(Number(prompt("Ingles knowledge: ")));

    let suma = arr.reduce(function(total, items) {
        return total + items
    })

    let total = suma / (arr.length);

    if(total){
        console.log(`"tu promedio de conocimientos es de ${total}%"`)
    }else{
        console.log("error datos invalidos")
    }
 }

 promedio()