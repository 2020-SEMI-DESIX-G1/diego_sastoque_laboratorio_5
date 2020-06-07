


const lab5 = () => { 
            /*
            Enunciado 1:
            Declarar dos variables con la palabra reservada "var"
            imprimir el resultado de las operaciones de
            "Suma", "Resta", "Multiplicación" y "División" en la consola.
            Las variables pueden ser estáticas
            */

            var num1 = 10
            var num2 = 10

            console.log("Suma: ", num1 + num2)
            console.log("Resta: ", num1 - num2)
            console.log("Multiplicacion: ", num1 * num2)
            console.log("Division: ", num1 / num2)

            /*
            Enunciado 2:
            Declarar dos variables con la palabra reservada "let", imprimir la concatenación de ellas.
            */

            let string1 = 'Esto es una'
            let string2 = 'prueba'

            console.log("Concatenacion: ", string1 + string2)

            /*
            Enunciado 3:
            Declarar dos variables con la palabra reservada "const",
            imprimir cuál es el tipo de dato de esa variable.
            */

            const test = 'test'
            const a = 20

            console.log( typeof (test))
            console.log( typeof (a))

            /*
            Enunciado 4:
            Declarar una variable tipo Object,
            colocar 4 llaves dentro de él que contengan:
                un entero,
                un string, 
                un booleano y
                un objeto vacío, 
            en ese mismo orden.
            */

            let car = {
                year: 2016,
                model: 'mirage',
                wheels: 4,
                
            }

            console.log(car.year)
            console.log(car.model)
            console.log(car.wheels)

}

exports.lab5 = lab5