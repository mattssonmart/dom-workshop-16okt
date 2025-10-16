// driver : Mårten
// nav    : Fiorella, Oligerta, Ahm

const rubrik = document.createElement("h2");

rubrik.textContent = 'Min rubrik för dagen';
rubrik.style.color = '#1e3a8a';

document.getElementById('rubrik').appendChild(rubrik);

const paragrap = document.createElement("p");
paragrap.textContent = 'Beskriv vädret idag';
paragrap.style.color = "#fef3c7"
document.getElementById('paragrap').appendChild(paragrap);

const ruta = document.createElement("div");
ruta.textContent = "Det här är en färgad ruta";
ruta.style.color = "#10b981";
document.getElementById('ruta').appendChild(ruta);


    



