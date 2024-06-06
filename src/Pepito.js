import React, { useEffect } from 'react';

const Pepito = () => {
  useEffect(() => {
    let tex = "DARK PEPITO PORTAFOLY LOLS UWU SOON MAS TEMITAS <3 ";
    let tex_extended = tex.repeat(3);
    let title = document.getElementById("title");

    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function printSubstrings() {
      for (var i = 0; i < tex.length; i++) {
        let substr = tex_extended.substring(i, i + 20);
        if (title) {
          title.textContent = substr;
        }
        //console.log(substr);
        await delay(300);
      }
      printSubstrings();
    }

    if (title) {
      printSubstrings();
    }
  }, []); // La lista de dependencias vacía asegura que se ejecute solo una vez después del primer render

  return <h1 id="title"></h1>;
};

export default Pepito;