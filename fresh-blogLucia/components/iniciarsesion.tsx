import { FunctionComponent } from "preact";

const Iniciar: FunctionComponent = () => {
  return (
    <form class="AddForm" action="/iniciar" method="post">
      <h1>Iniciar sesion</h1>
      <input type="text" name="contraseña" placeholder="Introduce tu contraseña" />
      <button type="submit"> Iniciar sesion </button>
    </form>
  );
};

export default Iniciar;