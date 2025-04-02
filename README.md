
# Qatar Museums - Fabrique
Qatar Museums wil een online collectie-ervaring bieden aan bezoekers. De opdracht is om een homepage te ontwerpen en ontwikkelen met een canvas dat objecten uit een API toont. Daarnaast is ons ook de opdracht gegeven om een detailpagina en een filterpagina te maken.

De website is gebouwd met Node.js, Express, Liquid als templating engine en Directus. De website toont een interactieve objectengalerij en bevat een formulier waarmee gebruikers nieuwe objecten kunnen voorstellen.

[Live site](https://the-web-is-for-everyone-interactive-z6p6.onrender.com/)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual of video toe 📸 -->
<!-- Voeg een link toe naar GitHub Pages 🌐-->

## Gebruik

De website biedt de volgende functionaliteiten:

- Homepagina: Hier worden kunstobjecten weergegeven in een responsive column indeling.
- Detailpagina: Gebruikers kunnen doorklikken op een object om meer informatie te zien.
- Acquisitieformulier: Gebruikers kunnen nieuwe objecten aanmelden via een formulier, waarbij een POST-request wordt verstuurd naar de API.

### User stories
User Stories

- Als gebruiker wil ik een overzicht van alle kunstobjecten zien, zodat ik gemakkelijk kan navigeren
- Als gebruiker wil ik een kunstobject kunnen selecteren en gedetailleerde informatie bekijken
- Als gebruiker wil ik een object kunnen aanmelden via een acquisitieformulier, zodat ik bij kan dragen aan de collectie.
- Als gebruiker wil ik switchen tussen twee talen (engels en arabisch), zodat ik de inhoud in mijn voorkeurs-taal kan lezen.

![image](https://github.com/user-attachments/assets/1aced930-748d-4629-b1ff-303a187d05da)

## Kenmerken
### Gebruikte technologieën

- Node.js & Express → Server-side en API-verzoeken
- Liquid → Templating engine voor dynamische pagina's
- Directus → API voor het ophalen en opslaan van objectgegevens
- Fetch API → Client-side data ophalen en verzenden
- CSS & Column Count → Responsive layout zonder gaten tussen afbeeldingen

### Ophalen van objecten uit de API
Deze route haalt artworks op uit de Directus API en stuurt ze naar de Liquid-template.
https://github.com/Karima002/the-web-is-for-everyone-interactive-functionality-/blob/7bf956e2f1611fc7e5361dc8ad42cb59dc5a2eac/server.js#L28-L34

### Verzenden van het acquisitieformulier (POST-request)
Wanneer een gebruiker een object aanmeldt, wordt dit met een POST-request naar Directus verzonden en vervolgens weergeven op de acquisition pagina.
https://github.com/Karima002/the-web-is-for-everyone-interactive-functionality-/blob/7bf956e2f1611fc7e5361dc8ad42cb59dc5a2eac/server.js#L68-L87


### UI-stack states
#### Succes State

#### Loading State

#### Error State

## Installatie
<!-- Bij Installatie staat hoe een andere developer aan jouw repo kan werken -->


## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
