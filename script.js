let selectedDestination;

function selectDestination(destination) {
    let info = document.getElementById("destination-info");
    selectedDestination = destination;

    if (destination === 'playa') {
        info.innerHTML = `
            <h2>Playa Magüipi</h2>
            <p>¡Prepárate para una experiencia mágica e inolvidable en la maravillosa Playa Magüipi! 🌊🐋 Desde el momento en que pongamos un pie en esta joya escondida, te sorprenderán los paisajes vírgenes y la energía única del lugar. Pero eso no es todo... ¡serás testigo de uno de los espectáculos más impresionantes de la naturaleza: el avistamiento de ballenas! Sentirás la emoción de ver a estas majestuosas criaturas surcar las aguas mientras disfrutas de una escapada que incluye todo lo necesario: transporte, visitas, deliciosa comida y el mejor alojamiento. ¡Este será un pasadía que quedará grabado en tu corazón!</p>
            <img src="./images/playa.jpg" alt="Playa Magüipi" width="500px">
        `;
    } else if (destination === 'quindio') {
        info.innerHTML = `
            <h2>Puebleando en Quindío: Encantos y Aventura</h2>
            <p>¿Lista para perderte en los encantos del eje cafetero? 🌄✨ Conocerás pueblos que parecen sacados de un cuento: desde el vibrante Salento con sus casas coloridas y el mágico Valle del Cócora, hasta la tranquilidad y autenticidad de Filandia. Además, nos relajaremos en las termales de Santa Rosa de Cabal, donde el calor de las aguas te envolverá como un cálido abrazo de los que tu me das. ¿Te imaginas recorriendo el valle en un Jeep y sintiendo la brisa fresca de la naturaleza? ¡Este será un viaje lleno de cultura, naturaleza y momentos inolvidables!</p>
            <img src="./images/quindio.jpg" alt="Quindío" width="500px">
        `;
    } else if (destination === 'ukumari') {
        info.innerHTML = `
            <h2>Parques Ukumarí y Consotá: Diversión y Naturaleza</h2>
            <p>¡Nos espera una aventura salvaje y llena de adrenalina! 🦁🌿 En el Bioparque Ukumarí, sentirás la emoción de estar rodeada por la biodiversidad más asombrosa de América Latina. Desde la impresionante Sabana Africana hasta los Bosques Andinos, cada rincón te permitirá conectar con la naturaleza. Y si eso no es suficiente, nos espera el Parque Consotá, un lugar lleno de diversión, con piscinas, toboganes y actividades para relajarnos y divertirnos al máximo. ¡Un día entero lleno de emoción, descubrimiento y experiencias únicas!</p>
            <img src="./images/ukumari.jpg" alt="Ukumarí" width="500px">
        `;
    }

    // Mostrar el botón de confirmar
    document.getElementById("confirm-button").style.display = 'block';
}

function confirmDestination() {
    let info = document.getElementById("destination-info");
    let buttons = document.querySelectorAll('.button-container button');

    // Deshabilitar los botones después de la confirmación
    buttons.forEach(button => button.disabled = true);

    let confirmationMessage = '';

    if (selectedDestination === 'playa') {
        confirmationMessage = `
            <h2>¡Increíble Elección Püa!</h2>
            <p>¡Elegiste Playa Magüipi! 🌴🌊 Prepárate para un paraíso donde la magia de las ballenas y la belleza del océano nos están esperando. ¡Estoy emocionado por compartir esta aventura contigo hermosa y hacer de este cumpleaños algo que jamás olvidaremos!</p>
        `;
    } else if (selectedDestination === 'quindio') {
        confirmationMessage = `
            <h2>¡Perfecta Elección Püa!</h2>
            <p>¡Elegiste Puebleando en Quindío! 🌄✨ Nos espera un viaje lleno de coloridos paisajes, encantadores pueblos y el cálido abrazo de las termales. Nuestra celebracion sera llena de magia y descubrimientos en el corazón del eje cafetero. ¡Estoy deseando vivir esta experiencia contigo amor!</p>
        `;
    } else if (selectedDestination === 'ukumari') {
        confirmationMessage = `
            <h2>¡Excelente Elección Püa!</h2>
            <p>¡Elegiste Parques Ukumarí y Consotá! 🦁🌿 Nos adentraremos en un mundo de aventuras y naturaleza. ¡Estoy listo para vivir esta increíble experiencia contigo y hacer de tu cumpleaños algo verdaderamente especial mi püa!</p>
        `;
    }

    // Mostrar el mensaje de confirmación
    info.innerHTML += `<div class="confirmation-message">${confirmationMessage}</div>`;

    // Ocultar el botón de confirmar
    document.getElementById("confirm-button").style.display = 'none';
}
