
# Qatar Museums - Fabrique
Qatar Museums wil een online collectie-ervaring bieden aan bezoekers. De opdracht is om een homepage te ontwerpen en ontwikkelen met een canvas dat objecten uit een API toont. Daarnaast is ons ook de opdracht gegeven om een detailpagina en een filterpagina te maken.

De website is gebouwd met Node.js, Express, Liquid als templating engine en Directus. De website toont een interactieve objectengalerij en bevat een formulier waarmee gebruikers nieuwe objecten kunnen voorstellen.

[Live site](https://the-web-is-for-everyone-interactive-z6p6.onrender.com/)


## Beschrijving

De website biedt de volgende functionaliteiten:

- Homepagina: Hier worden kunstobjecten weergegeven in een responsive column indeling.
- Detailpagina: Gebruikers kunnen doorklikken op een object om meer informatie te zien.
- Acquisitieformulier: Gebruikers kunnen nieuwe objecten aanmelden via een formulier, waarbij een POST-request wordt verstuurd naar de API.
- Switch van talen: Bezoekers kunnen de website ook in het arabisch bezoeken. Daarvoor kunnen ze op العربية klikken op de navigatie.

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


## Ontwerpkeuzes
### Tweetalige navigatie (Engels & Arabisch)
Vanuit de navigatie kan je switchen van een Engelse site naar een Arabische site. Vanuit daar kan je kiezen voor een artobject. De informatie van het object wordt in het arabisch opgehaald vanuit de database. Als er geen informatie beschikbaar wordt een default tekst weergegeven. Vanuit het artobject kan je ervoor kiezen een formulier in te vullen. Dit formulier kan in het arabisch worden ingevuld indien de bezoeker een artobject wil verkopen of verdere informatie heeft over een bepaald artobject. Ook heb ik een [user test](https://github.com/Karima002/the-web-is-for-everyone-interactive-functionality-/issues/16) uitgevoerd om het gebruik voor de arabische bezoekers te verbeteren.

https://github.com/user-attachments/assets/90280bf1-6786-4f80-a449-7f843229c8b3


### Toepassen huisstijl op de acquisitionpagina
Bij het ontwerpen van het formulier voor “Object Acquisition” is bewust gekozen om de bestaande huisstijl van Qatar Museums door te trekken. Hierdoor sluit het formulier visueel goed aan bij de rest van de website. Dit is terug te zien in de gebruikte kleuren, typografie, strakke lijnen en blokverdeling. Ik heb dezelfde huisstijl gebruikt als op andere pagina’s, zodat alles er herkenbaar uitziet. Het doel van het formulier is dat bezoekers kunst kunnen aanbieden of verdere informatie kunnen invullen over bepaalde kunst. 

![image](https://github.com/user-attachments/assets/638b4f94-a7b9-4535-bbfd-43b0b0929ac4)

## UI-stack states



### Ideal State
In het formulier laat ik de ideal state zien. In de Ideal state wordt de geschiedenis van verzonden proposals weergegeven. Dit geeft de bezoeker een overzicht van eerdere proposals en maakt het makkelijk om terug te kijken naar wat er al is ingediend. Het formulier kan in het Engels als arabisch worden weergegeven. Dit hangt af van welke voorkeur te bezoeker heeft gekozen. 
https://github.com/Karima002/the-web-is-for-everyone-interactive-functionality-/blob/d71d11557066d7dfa6e477dee2cfa75d03ea33c3/views/acquisitions.liquid#L33-L44

![Image](https://github.com/user-attachments/assets/edf3b34e-34dd-4bd0-841f-b40007789434)

### Loading State
Voordat het formulier wordt verzonden krijg je een loading state te zien. De opacity van de button wordt verlaagd en er komt een zandloper emoji tevoorschijn. De loading state is gecodeerd met behulp van javascript.

https://github.com/Karima002/the-web-is-for-everyone-interactive-functionality-/blob/66bd915bbfd0c8e5df5974ab917850dc69898b6a/views/acquisitions.liquid#L65-L69

https://github.com/user-attachments/assets/a2d31e63-afc6-49ce-91be-2f96a40fde67


### Succes State
Na het verzenden van het acquisition formulier krijg je een “succes state”  te zien. Het is een apart scherm die ziet nadat je een formulier succesvol hebt ingevuld. Dit is belangrijk voor de gebruikerservaring (UX), want het geeft duidelijkheid en het bevestigd dat alles goed is gegaan. Na een [user test[(https://github.com/Karima002/the-web-is-for-everyone-interactive-functionality-/issues/11#issue-2955793670) kwam namelijk naar voren dat nog niet duidelijk is hoe de user kan zien dat het verzenden van het formulier is gelukt. 

![image](https://github.com/user-attachments/assets/1f615669-9414-4b77-a6f7-85189ad3a813)

## Progressive enhancement
Progressive Enhancement is een strategie die helpt bij het bouwen van websites die altijd werken, ongeacht de technologie die de gebruiker tot zijn beschikking heeft. Het idee is om je website stap voor stap uit te breiden, zodat je de basisfunctionaliteit voor iedereen garandeert. Stap voor stap voeg je extra functies toevoegt voor gebruikers met meer geavanceerde browsers of apparaten.
- Core functionaliteit: Op de site wil ik een interactie met de server maken. De bezoeker kan het formulier invullen met verdere informatie over de artwork. Onderdaan wordt de history weergegeven van eerdere bezoekers die ook een proposal hebben ingevuld.
- Functionaliteit bouwen met simpele techniek. De functionaliteit heb ik gebouwd met een <form> element.
https://github.com/Karima002/the-web-is-for-everyone-interactive-functionality-/blob/117c0e584f7287a375118679b40f24bd8bfea998/views/acquisitions.liquid#L18-L30
- Extra enhancement toevoegen: In CSS heb ik de feature detection @supports gebruikt. Met @support kan ik checken of een browser een techniek (bijvoorbeeld flexbox) ondersteunt. Zo zorg ik ervoor dat de site werkt in alle browsers en dat in moderne browsers het formulier onder elkaar wordt geplaatst met flexbox.

## Installatie
<!-- Bij Installatie staat hoe een andere developer aan jouw repo kan werken -->
Het project is gebouwd met NodeJS. Om het project te kunnen gebruiken dien je eerste NodeJS te installeren. Dit doe je door het invullen van npm install in de terminal. Vul daarna npm start in om de server te starten. Via http://localhost:8000/ kan je je werk bekijken. 

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
