# Quick Scan
Het doel van dit project is om samen te werken met de eindklant of de eindklant in staat te stellen zelfstandig een quick scan uit te voeren. Met deze quick scan stellen we de klant vragen aan de hand van een wireframe, waarbij de vragen afhankelijk zijn van de antwoorden van de klant. Op basis van de resultaten van de quick scan kunnen we samen met de klant bepalen hoe we hen het beste kunnen ondersteunen en welke gebieden het meest moeten worden benadrukt. Daarnaast dient het als een interessante marketingtool. Een Quick Scan is meestal saai en eendimensionaal, waarbij 20 opeenvolgende vragen worden beantwoord. Ons doel is om een meer plezierige/interactieve/informatieve quick scan te ontwikkelen.

## Table of Contents
- [Project Purpose](#project-purpose)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Project Purpose
Het doel van dit project is om ervoor te zorgen dat de klanten van Morphé zelfstandig een quick scan kunnen uitvoeren.

## Technologies Used
- HTML
- CSS
- JavaScript

## Features
je kan vragen toevoegen
je kan een embed op een website platsen
je kan vragen beantwoorden

## Installation
je kan de link van de website op je social media zetten
of je kan een embed toevoegen
```
<iframe src="morphe.eu/quickscan/embed" width="640" height="360"></iframe>
```

## Usage
nieuwe vraag toevoegen
questionType: 0 = multiple choice, 1 = multiple choice with answers, 2 = slider
```
naam_vraag: new Question(questionType, 'De vraag zelf', [
    {
        text: 'antwoord',
        value: 'wat er mee word gegeven',
        event: de key van de vraag waar die naar toe moet
    }
])
```