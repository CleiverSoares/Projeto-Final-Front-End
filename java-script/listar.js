const urlGatos = "bancodedadosgato.json";
const urlCachorros = "bancodedados.json";
const lista = document.getElementById("lista");


 function consultar(tipo) {
  fetch(tipo=='cachorros' ?urlCachorros:urlGatos)
    .then((res) => res.json())
    .then((dados) => {
      dados.forEach((item) => {
        const img = document.createElement("img");
        // img.src = item.src.medium;
        img.setAttribute('src', item.src.medium);
        // img.style.width = "200px";
        img.setAttribute('width', '200px');
        document.getElementById(tipo).appendChild(img);
        // window.location.replace('../porte.html');
        // lista.appendChild(img);
      });
    });
 }
consultar('cachorros');
consultar('gatos');







// var oImg = document.createElement("img");
// oImg.setAttribute('src', 'http://www.testtrackinglink.com/%27);
// oImg.setAttribute('alt', 'na');
// oImg.setAttribute('height', '1px');
// oImg.setAttribute('width', '1px');
// document.body.appendChild(oImg);


  //  const  array = [];
  
  // function consultar() {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((dados) => {
  //       dados.forEach((item) => {
  //          document.createElement("img").then((image) => {
  //           image.src = item.src.medium;
  //           image.style.width = "200px";
  
  //           array.push(array);
  //         });
          
  //         // img.src =  item.src.medium;
  //         console.log(array);
  //           // lista.appendChild(img);
  //          lista.value = array;
  //       });
  //     });
  // }