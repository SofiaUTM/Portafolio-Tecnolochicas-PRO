const nombre = "Sofía Saraí Cauich Vargas"

//alert(nombre);

console.log(nombre);

document.write(nombre);

console.log(document.getElementById('título'));
let elementoHTMLtítulo = document.getElementById('título');

let elementoDeTypewriter = new Typewriter(elementoHTMLtítulo, {
    loop: true
});

elementoDeTypewriter.typeString('¡Hola!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Soy Sofía Cauich')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Desarrolladora Web JR.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Y Diseñadora Gráfica JR.')
    .pauseFor(2500)
    .start();