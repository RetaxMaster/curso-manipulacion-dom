/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

 const baseUrl = "https://platzi-avo.vercel.app";
 const appNode = document.querySelector("#app")

// web api

// Conectarnos al server
window
    .fetch(`${baseUrl}/api/avo`)
    .then(respuesta => respuesta.json())
    .then(responseJson => {

        const todosLosItems = [];
        
        responseJson.data.forEach(item => {
            
            // Crear imagen
            const imagen = document.createElement("img");
            imagen.src = `${baseUrl}${item.image}`;

            // Crear título
            const title = document.createElement("h2");
            title.textContent = item.name;

            // Crear precio
            const price = document.createElement("div");
            price.textContent = item.price;

            const contenedor = document.createElement("div");
            contenedor.append(imagen, title, price)      ;
            
            todosLosItems.push(contenedor);

        });

        appNode.append(...todosLosItems);
        
    });

// Procesar la respuesta y convertirla en JSON
// JSON -> Data -> Renderizar info browser