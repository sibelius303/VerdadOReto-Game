const input = document.querySelector('#input');
const btnMas = document.querySelector('#btnMas');
const btnMenos = document.getElementById('btnMenos')
const ul = document.querySelector('#ul');
const jugadores = [];

btnMas.addEventListener('click', (e) => {
    let text = input.value;
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = text;
    li.appendChild(p);
    ul.appendChild(li);
    jugadores.push(input.value);
    

    input.value = "";
});


btnMenos.addEventListener('click', (e)=> {
    ul.removeChild(ul.lastChild);
    jugadores.pop();
    
})

//Panel de Turno Actual//

const btnSiguienteJugador = document.querySelector('#btnSiguienteJugador');
const jugadorActivo = document.querySelector('#jugadorAct');


btnSiguienteJugador.addEventListener('click', ()=> {
    textoJuego.innerHTML='';
    var jugadorRandom = Math.floor(Math.random()*jugadores.length);
    var jugador = jugadores[jugadorRandom];
    jugadorActivo.innerHTML= jugador;
})


//Arrays con los retos//

const retoArray = ['Cántale el coro de una canción romántica a la persona de la derecha (Saca a relucir esa voz angelical y conquistal@... Si no estás con ganas, pues bebe un trago)'
,'Párate de manos durante 30 segundos, (Si no puedes o no lo logras, bebe un trago... Si lo pudiste hacer, ¡FELICIDADES! dirigirte al circo más cercano)','¡Hey, Examen sorpresa! Tienes 5 segundos para nombrar el apellido de todos los jugadores, si te equivocas o no te acuerdas, bebe un trago por mal amigo','El último que se toque la nariz ¡bebe! (¿Que por qué? ¡Pues porque sí!)','¡Hey Sherlock! A que no adivinas el color de la ropa interior de la persona que tienes al frente... (Si la adivina, bebe esa persona; si no lo adivinas... Pues paila parcero, te toca beber)','Probemos tus habilidades artísticas! Tienes 30 segundos para dibujar a la persona de la izquierda, los demás decidirán si se parece en algo, sino se parece en nada, pues no pasa nada, solo bébete un traguito y ya está','Bebe el más oscuro del grupo... Pues por negro, ¡evidentemente!','Bebe la persona más clara del grupo; Así agarras un poco mas de sol el próximo verano','La lechuza, la lechuza hace shhh! Nadie puede mencionar ni una sola palabra ( El primero que hable bebe un trago)','¡Hubo un error en el registro de tu nacimiento! Cambia por 3 rondas de nombre con el jugador que te sigue en la lista, si algún jugador los llama de otra manera deberá tomar un trago','¡Hey! Pongámonos nostálgicos, escoge alguien de la mesa, para que cuente una anécdota que hayan tenido juntos, los demás deberán decir si es entretenida o no, si la mayoría le pareció aburrida, beben los dos','¡El suelo es lava! Ningún jugador puede tocar el suelo durante dos rondas, el que lo haga, le toca un shot por quemarse en la lava','Debes tomar un shot del ombligo de la persona de sexo opuesto más cercana a ti','¡Francotirador! Escoge a una persona para que beba un shot','¡DobleKill! Escoge dos personas para que beban un shot cada uno','¡Se pudrió todo! Bebe un shot todo el mundo','La voz de la experiencia,  La persona con más edad, decide quien se toma el Shot','El Nene corrompido.  La persona con menos edad bebe un shot! (Al menos que sea menor de edad, no queremos ir presos)','Grita: ¡Granada, Al suelo! El último en tirarse al suelo, bebe un shot por lento','¡Piensa rápido! Tienes 5 seg para decir, un país, una fruta y un animal por la letra "P", sino anda a leer un diccionario y bebe un shot mientras tanto','¿Confías en tu pulso? Los demás jugadores te taparan los ojos, y te pondrán 3 shots en frente, 2 con agua y uno con bebida; Deberás escoger uno a ciegas y rezar porque te toque agüita.'
,'¡Piensa rápido! Tienes 5 seg para decir, un país, una fruta y un animal por la letra "A", sino anda a leer un diccionario y bebe un shot mientras tanto','¡Piensa rápido! Tienes 5 seg para decir, un país, una fruta y un animal por la letra "B", sino anda a leer un diccionario y bebe un shot mientras tanto','¡Duelo a Muerte! Juega piedra, papel o tijeras con el jugador de tu derecha, el que pierda bebe un shot','¡Mira, Sin Manos! Deberás tomar un shot sin usar las manos (¿Que como lo harás? Ese no es nuestro problema)','¡Juguemos! Los demás jugadores anotaran el nombre de un objeto en un papel, cuando ya esté listo, tienes 1 min para adivinar que es. Si adivinas, todos los demás jugadores deberán tomar un shot, si no adivinas… deberás beber 3 shots seguidos; ¡Que la fuerza te acompañe!','¡Con esa boca besas a tu madre! El primer jugador en decir una palabrota, deberá beber un shot'];

console.log(retoArray)
//Arrays con las verdades//

const verdad = ['¿Cuál es el sitio más extraño donde hiciste el delicioso? (Pasa el dato)', 'Si tuvieras que besar a alguien del grupo de jugadores;  ¿A quién besarías? (No vale decir que a tu pareja, si esta está jugando)','¿Alguna vez te escapaste de tu casa? Cuéntanos esa historia','Si hubiera un apocalipsis zombi en tu ciudad, ¿Con que jugador preferirías sobrevivir?','¿Qué es lo más vergonzoso que tus padres te llegaron a encontrar?','¿Con que persona famosa harías el delicioso)','¿Cuál sería tu gusto culposo más raro?','¿Cuál fue la peor C@G@D@ que te mandaste de chico? Cuéntanos el regaño de tus padres','¿Cuál fue tu mejor polvo? Y explica él porque (Si sonreíste al leer la pregunta, es porque ya te acordaste picar@)',' ¿Quién de la mesa crees que podría ser un asesino en serie? (Explica el porqué o corre por tu vida ¡Lo que quieras!)','¿Has probado drogas? (En este juego no juzgamos, solo nos divertimos)','¿Qué es lo que más odias del jugador que tienes en frente? (Es tu momento de expresarle al mundo lo fe@ que es xD)'];

//Panel Del Juego//

const textoJuego = document.querySelector('#textoJuego');



//Boton Verdad//

const btnVerdad = document.querySelector('#btnVerdad');

btnVerdad.addEventListener('click', ()=> {
    var randomVerdadi = Math.floor(Math.random()*verdad.length);
    var randomVerdad = verdad[randomVerdadi];
    textoJuego.innerHTML = randomVerdad;
});

//Boton Reto//
const btnReto = document.querySelector('#btnReto');

btnReto.addEventListener('click', ()=> {
    var randomRetoi = Math.floor(Math.random()*retoArray.length);
    var randomReto = retoArray[randomRetoi];
    textoJuego.innerHTML = randomReto;
});
