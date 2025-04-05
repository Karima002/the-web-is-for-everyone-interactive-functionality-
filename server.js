// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({extended: true}))

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express());

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')


//GET routes
app.get('/', async function (request, response) {
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/fabrique_art_objects'
  );
  const apiResponseJSON = await apiResponse.json(); // Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
  
  response.render("index.liquid", { api: apiResponseJSON.data });
});

// Route voor de homepagina in het arabisch
app.get('/ar', async function (request, response) {
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/fabrique_art_objects'
  );
  const apiResponseJSON = await apiResponse.json(); // Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
  
  response.render("indexar.liquid", { api: apiResponseJSON.data });
});

// Route voor elk specifiek object
app.get ('/object/:id', async function (request, response) {
  const artworkId = request.params.id; 
  const apiResponse = await fetch(`https://fdnd-agency.directus.app/items/fabrique_art_objects/${artworkId}?fields=title,image,summary,artist,location,displayDate,materials,techniques,objectNumber,recordType`
  );
  const apiResponseJSON = await apiResponse.json(); // Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
  response.render("objects.liquid", { artwork: apiResponseJSON.data }); // in liquid refereer je naar de variable waarin de data opgeslagen staat. 
});

// Route voor elk specifiek object in het arabisch
app.get('/ar/object/:id', async function (request, response) {
  const artworkId = request.params.id; 
  const apiResponse = await fetch(`https://fdnd-agency.directus.app/items/fabrique_art_objects/${artworkId}?fields=title,titleAR,image,slug,summary,summaryAR`
  );
  const apiResponseJSON = await apiResponse.json(); // Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
  response.render("objectar.liquid", { artwork: apiResponseJSON.data }); // in liquid refereer je naar de variable waarin de data opgeslagen staat. 
});

app.get('/acquisition', async function (request, response) {
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/fabrique_art_objects'
  );
  const apiResponseJSON = await apiResponse.json(); // Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
  
  // Voor het weergeven van de opgehaalde data in op de acquisitionpagina
  const messageResponse = await fetch("https://fdnd-agency.directus.app/items/fabrique_messages/?filter={%22for%22:%20{%22_contains%22:%20%22Karima_%22}}")
  const messageResponseJSON = await messageResponse.json(); // Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen

  response.render("acquisitions.liquid", { api: apiResponseJSON.data, messages: messageResponseJSON.data});
});


app.get('/acquisitionar', async function (request, response) {
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/fabrique_art_objects'
  );
  const apiResponseJSON = await apiResponse.json(); // Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
  
  // Voor het weergeven van de opgehaalde data in op de acquisitionpagina
  const messageResponse = await fetch("https://fdnd-agency.directus.app/items/fabrique_messages/?filter={%22for%22:%20{%22_contains%22:%20%22Karima_%22}}")
  const messageResponseJSON = await messageResponse.json(); // Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen

  response.render("acquisitionar.liquid", { api: apiResponseJSON.data, messages: messageResponseJSON.data});
});


app.get('/succesfull', async function (request, response) {
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/fabrique_art_objects'
  );
  const apiResponseJSON = await apiResponse.json(); // Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
  
  response.render("succes.liquid", { api: apiResponseJSON.data });
});

app.get('/succesfullar', async function (request, response) {
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/fabrique_art_objects'
  );
  const apiResponseJSON = await apiResponse.json(); // Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
  
  response.render("succesar.liquid", { api: apiResponseJSON.data });
});


//POST routes
let forms = [] //array voor het opslaan van formulieren

// app.post('/acquisition', async function (request, response) {
//   forms.push (request.body.texts)
//   response.redirect(303, '/acquisition')

// })


app.post('/acquisition', async function (request, response) {
  // forms.push (request.body.texts)

  await fetch("https://fdnd-agency.directus.app/items/fabrique_messages", {
    method: "POST",
    body: JSON.stringify({
      for: "Karima_" + request.body.name,
      from: request.body.email,
      text: request.body.description,
    }),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }, //request met post, met headers geef je aan wat er is meegegeven, je geeft informatie over wat je in de request heb meegegeven. 
  });
  

  response.redirect(303, '/succesfull')

})

app.post('/acquisitionar', async function (request, response) {
  // forms.push (request.body.texts)

  await fetch("https://fdnd-agency.directus.app/items/fabrique_messages", {
    method: "POST",
    body: JSON.stringify({
      for: "Karima_" + request.body.name,
      from: request.body.email,
      text: request.body.description,
    }),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }, //request met post, met headers geef je aan wat er is meegegeven, je geeft informatie over wat je in de request heb meegegeven. 
  });
  

  response.redirect(303, '/succesfullar')

})



/*
// Zie https://expressjs.com/en/5x/api.html#app.get.method over app.get()
app.get(…, async function (request, response) {
  
  // Zie https://expressjs.com/en/5x/api.html#res.render over response.render()
  response.render(…)
})
*/

/*
// Zie https://expressjs.com/en/5x/api.html#app.post.method over app.post()
app.post(…, async function (request, response) {

  // In request.body zitten alle formuliervelden die een `name` attribuut hebben in je HTML
  console.log(request.body)

  // Via een fetch() naar Directus vullen we nieuwe gegevens in

  // Zie https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch over fetch()
  // Zie https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify over JSON.stringify()
  // Zie https://docs.directus.io/reference/items.html#create-an-item over het toevoegen van gegevens in Directus
  // Zie https://docs.directus.io/reference/items.html#update-an-item over het veranderen van gegevens in Directus
  await fetch(…, {
    method: …,
    body: JSON.stringify(…),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });

  // Redirect de gebruiker daarna naar een logische volgende stap
  // Zie https://expressjs.com/en/5x/api.html#res.redirect over response.redirect()
  response.redirect(303, …)
})
*/


// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console
  console.log(`Daarna kun je via http://localhost:${app.get('port')}/ jouw interactieve website bekijken.\n\nThe Web is for Everyone. Maak mooie dingen 🙂`)
})
