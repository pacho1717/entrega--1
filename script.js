
let total = 0
let salida = ""
let menu = ("\n1 - Comer aqui \n2 - Takeaway \n0 - Para salir ")


function carta(comida, nombres) {
  switch (comida) {
    case 1:
      console.log("Es guiso")
      comida = "Guiso"
      precio = 250
      total = total + precio
      salida += nombres + " " + comida + "\n"
      break;
    case 2:
      console.log("Es hamburguesa")
      comida = "Hamburguesa"
      precio2 = 450
      total = total + precio2
      salida += nombres + " " + comida + "\n"

      break;

    default:
      console.log("No es ni hamburguesa ni guiso")


  }
}

function cartaTakeAway(comida, nombres) {
  switch (comida) {
    case 1:
      console.log("Es guiso")
      comida = "Guiso"
      precio = 250
      total = total + precio
      salida += nombres + " " + comida + "\n"
      break;
    case 2:
      console.log("Es hamburguesa")
      comida = "Hamburguesa"
      precio2 = 450
      total = total + precio2
      salida += nombres + " " + comida + "\n"

      break;

    default:
      console.log("No es ni hamburguesa ni guiso")



  }
}


function comerEnLocal() {
  let cantidadDeComensales = Number(prompt("Ingrese cantidad de comensales"))


  for (let i = 0; i < cantidadDeComensales; i++) {
    let nombres = (prompt("ingrese su nombre"))
    alert("Bienvenido " + nombres)
    // carta()
    let comida = Number(prompt("el menu es \n1 - Guiso \n2 - Hamburguesa"))
    carta(comida, nombres, salida)





  }
  alert("La lista de comensales son:" + "\n" + salida + "\n" + "EL TOTAL ES $" + total)


}

function takeAway() {
  let direccion = (prompt("Ingrese su direccion"))


  do {
    comida = Number(prompt("El menu es \n1 - Guiso \n2 - Hamburguesa \n0 - Salir"))
    if (comida == 1) {
      comida = "Guiso"
      let comidaCantidad = Number(prompt(`Ingrese la cantidad para ${comida}`))
      let precio = 250
      alert("Su pedido es:" + "\n" + comida + comidaCantidad + " Unidades" + "\n" + "Se enviara a " + direccion)
      totalTakeAway(comidaCantidad, precio)
      comida = 0

    } else if (comida == 2) {
      comida = "Hamburugesa"
      let comidaCantidad = Number(prompt(`Ingrese la cantidad para ${comida}`))
      let precio = 450
      alert("Su pedido es:" + "\n" + comida + comidaCantidad + " Unidades" + "\n" + "Se enviara a " + direccion)
      totalTakeAway(comidaCantidad, precio, comida)
      comida = 0
    } else if (comida > 2 || comida < 0) {
      alert("Opcion incorrecta")
    }
  } while (comida != 0)

}

function totalTakeAway(comidaCantidad, precio, comida) {
  console.log(precio, comidaCantidad)
  total = precio * comidaCantidad
  console.log(total)
  alert("El total es: $" + total)



}




do {
  alert ("Bienvenido a nuestro comedor")
  opcion = Number(prompt(menu))
  if (opcion == 1) {
    comerEnLocal()
  } else if (opcion == 2) {
    takeAway()
  } else if (opcion != 0) {
    alert("Opcion incorrecta")
  }
} while (opcion != 0)



