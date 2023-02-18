// const express = require('express')
// const app = express()
// const PORT = 8080

// app.get('/',(req,res) => {
//     res.send('prueba')
// })
// app.get('/user/:name/:age',(req,res) => {
//     let nombre = req.params.name
//     let edad = req.params.age
//     // res.send('Hola Mundo')
//     res.json({
//         nombre:nombre,
//         edad: edad
//     })
// })

// app.get('/profesores',(req,res) => {
//     console.log(req.query);
//        res.json({
//         profesor: req.query.profesor1
//     })
// })
// app.listen(PORT, () => {
//     console.log('Servidor activo')
// })

const express = require('express')

const app = express()

const PORT = 8080

//PRIMER EJERCICIO
//Crear una ruta que reciba nombre y apellido por medio de params (ruta parametrizada) y devuelva por un res.send un query string armando un saludo (ej: res.send(`Hola ${nombre}`) ).

app.get('/user/:nombre/:apellido', (req,res) => {
    let nombre = req.params.nombre;
    let apellido = req.params.apellido;

    res.send(`Hola, mi nombre y apellido es ${nombre}, ${apellido}`)
})

//SEGUNDO EJERCICIO 
//Crear una ruta “dividir” la cual reciba dos parámetros (ruta parametrizada) divisor y dividendo, la misma tiene que devolver un res.json({error: "no se puede dividir por cero"}) si el usuario ingresa un 0, si no es el caso devolver res.json({resultado}).

app.get('/dividir', (req,res) => {
    console.log(req.query)
    let divisor = req.query.divisor
    let dividendo = req.query.dividendo

    let resultado = (divisor / dividendo)

    let reject = `Error: no se puede dividir ${divisor} entre ${dividendo}`

    if(divisor == 0 || dividendo == 0) {
        res.json({reject})
    }
    else {
        res.json({resultado})
    }
})

// //TERCER EJERCICIO
//Crear una ruta que sume dos valores (ruta parametrizada), pero poner una condición de que no se puedan enviar números menores que cero, y el resultado se debe devolver por medio de un res.json({resultado}).

app.get('/sumar', (request,response) =>{
    let num1 = parseInt(request.query.num1)
    let num2 = parseInt(request.query.num2)
    let resultado = (num1+num2)
    if(num1 < 0 || num2 < 0) {
        response.json(`No se pueden enviar números menores a 0.  error: ${num1} o ${num2}`)
    }
    else {
        response.json(`El resultado de la suma es de ${resultado}`)
    }

    

})

//CUARTO EJERCICIO 
//Crear una ruta que reciba un numero (ruta con query) si el número es impar debe devolver un res.send("no autorizado") , y si el número es par debe devolver res.send("autorizado").

app.get('/parimpar', (request,response) => {
        let numero = request.query.numero
        if(numero % 2 === 1) {
            response.json(`No autorizado`)
        }
        else {
            response.json('autorizado')
        }

});

//QUINTO EJERCICIO 
//Crear una ruta “lista de compras” (ruta con query) que devuelva un objeto con 5 productos, se debe usar res.json({objeto}).
app.get('/lista', (req,res) => {
    let listaProductos = {
        producto1: req.query.producto1,
        producto2: req.query.producto2,
        producto3: req.query.producto3,
        producto4: req.query.producto4,
        producto5: req.query.producto5
    }
    res.json({listaProductos})
})


app.listen(PORT,() => {
    console.log('Servidor Levantado con puerto 8080')
})