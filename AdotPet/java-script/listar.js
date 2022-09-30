const urlGatos = "bancodedadosgato.json";
const urlCachorros = "bancodedados.json";

function consultar(tipo) {
  fetch(tipo=='cachorros' ?urlCachorros:urlGatos)
    .then((res) => res.json())
    .then((dados) => {
      dados.forEach((item) => {
        const data = document.createElement("div");
        const info = document.createElement("p");
        info.className = "info"
        const img = document.createElement("img");
        info.innerText =('cod: ' +item.id);
        img.setAttribute('src', item.src.medium, item.id);
        img.setAttribute('width', '200px');
        document.getElementById(tipo).appendChild(data);
        data.appendChild(img);
        data.appendChild(info);
        
      });
    });
 }
consultar('cachorros');
consultar('gatos');

