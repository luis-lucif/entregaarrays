let option;

const productos =[
    {nombre:"teclado", precio: 3000},
    {nombre:"mouse",  precio:5000},
    {nombre:"joystick", precio:7000}
];

let carrito =[]

let seleccion =prompt("hola desea armar su setup ingrese si o no")

while(seleccion !="si" && seleccion !="no"){
    alert("por faovr ingresar si o no")
    seleccion = prompt("hola desea armar su setup si o no")
}

if(seleccion == "si"){
    alert("a continuacion nuestros productos")
    let todosLosProductos = productos.map((producto) => producto.nombre + " $" + producto.precio );
    alert(todosLosProductos.join(" - "))
}else if (seleccion == "no"){
    alert("gracias por venir, hasta pronto!!!")
}

while(seleccion !="no"){
    let productos = prompt("agregar un producto a tu carrito")
    let precio = 0

    if(productos == "teclado" || productos == "mouse" || productos == "joystick"){
        switch(productos){
            case "teclado":
               precio = 3000;
            break;

         
            case "mouse":
            precio = 5000;
            break;
            

            case "joystick":
            precio = 7000;
            break;
            

            default:
                break;


        }

        let unidades = parseInt(prompt("cuantas unidades quiere llevar"))

        carrito.push({productos, unidades, precio})
        console.log(carrito)

    } else{
        alert("no tenemos ese producto")
    }

    seleccion = prompt("desea seguir comprando? si o no")
    
    while(seleccion === "no"){
        alert("gracias por comprar!")
        carrito.forEach((carritoFinal) =>{
            alert(`producto: ${carritoFinal.productos}, unidades: ${carritoFinal.unidades},total a pagar procutos  $${carritoFinal.unidades * carritoFinal.precio} `)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0 ) 
alert(`el total a pagar por su compra es : ${total}`)
