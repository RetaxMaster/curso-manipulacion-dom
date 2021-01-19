/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo"

// web api

// Conectarnos al server
window
    .fetch(url)
    .then(respuesta => respuesta.json())
    .then(responseJson => {

        const todosLosItems = [];
        
        responseJson.data.forEach(item => {
            
            // Crear imagen
            const imagen = document.createElement("img");

            // Crear título
            const title = document.createElement("h2");

            // Crear precio
            const price = document.createElement("div");

            const contenedor = document.createElement("div");
            contenedor.append(imagen, title, price)      ;
            
            todosLosItems.push(container);

        });

        document.body.append(...todosLosItems);
        
    });

// Procesar la respuesta y convertirla en JSON
// JSON -> Data -> Renderizar info browser