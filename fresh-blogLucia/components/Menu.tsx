import { FunctionComponent } from "preact";

type MenuProps = {
  selected: "Ver blogs" | "Añadir blog";
};
const Menu: FunctionComponent<MenuProps> = ({ selected }) => {
  return (
    <div class="menu">
      <a href="/" class={selected === "Ver blogs" ? "selected" : ""}>
        Ver blogs
      </a>
      <a href="/iniciar" class={selected === "Añadir blog" ? "selected" : ""}>
        Añadir blog
      </a>
    </div>
  );
};

export default Menu;