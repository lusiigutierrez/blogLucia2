import { FunctionComponent } from "preact";

const AddBlog: FunctionComponent = () => {
  return (
    <form class="AddForm" action="/add" method="post">
      <h1>Add new contact</h1>
      <input type="text" name="name" placeholder="Nombre" />
      <input type="text" name="texto" placeholder="Escriba su blog" />
      <input type="date" name="fecha" placeholder="Fecha" />
      <button type="submit"> Crear Blog </button>
    </form>
  );
};

export default AddBlog;
