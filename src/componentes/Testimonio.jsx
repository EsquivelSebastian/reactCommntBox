import React from "react";
function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={ require ("../imagenes/fotoModel.jpeg")}
        alt="fotode modelo" />
      <div className="contenedor-texto-testimonio" >
        <p className="nombre-testimonio">Emma Bostian en Sucia</p>
        <p className="cargo-testimonio">Ingeniera de sofware en Spotify</p>
        <p className="texto-testimonio">Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Vitae, fugiat rerum. Error dicta
          consequatur quae porro, eveniet architecto. Sunt ea minus sed accusamus
          eligendi maxime a quod provident, quam quisquam?</p>

      </div>
    </div>
  );
}
export default Testimonio;