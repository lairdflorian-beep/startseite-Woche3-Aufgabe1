// Wird beim Klick auf "Rezept suchen" aufgerufen (onclick in index.html).
function zeigeSuche() {
    alert("Such-Funktion");
}

// Wird beim Klick auf die Rezepte aufgerufen (onclick in index.html).
function zeigeRezept(element) {
    const rezeptName = element.querySelector(".rezept-name").textContent;
    alert("Rezept: " + rezeptName);
}

