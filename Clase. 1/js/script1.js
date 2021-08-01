const nombre = ariel;//no se modifica
let edad = 20;// se puede modificar
//var = variable global a todo el programa
const ariel = {
    nombre: "Ariel",
    apellido: "Vega",
    edad: 20,
    lenguajes: [
        {
            nombre: 'js',
            experiencia: 1
        },
        {
            nombre: 'phyton',
            experiencia: 1
        }
    ],
    hobbies: ['magia✨','bartender🍹','programar']    
};

//emojis= tecla windos + punto

const jugadores = [{
    nombre : 'leo',
    apellido : 'messi',
    edad : 33,
    posiciones: [

        {
            posicion: 'extremo por derecha',
            nivel: 10
        },

        {
            posicion:'enganche',
            nivel: 8,
            posicionNatural: false 
        }
    ],
    clubes: ['argentina','barcelona']

    },{
        nombre : 'leo2',
        apellido : 'messi2',
        edad : 33,
        posiciones: [
    
            {
                posicion: 'extremo por derecha',
                nivel: 10
            },
    
            {
                posicion:'enganche',
                nivel: 8,
                posicionNatural: false 
            }
        ],
        clubes: ['argentina','barcelona']
    
    }];

function verificarEdad(edad){
    let verif = false;
    if(edad < 18){
        verif = false;
    }
    else{
        verif = true
    }
};

const verificarEdad = (edad) =>{
    let verif = false;
    if(edad < 18){
        verif = false;
    }
    else{
        verif = true
    }
};

const listar = (jugadores) => {
    jugadores.forEach(jugador => {
        console.log(jugador.nombre);      
    });
};

listar(jugadores);