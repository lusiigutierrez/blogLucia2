import { FunctionComponent } from "preact";
import Blog from "../types.ts"; 

const BlogList: FunctionComponent<{ blogs: Blog[] }> = (
  { blogs },
) => {
  return (
    <div class="contactlist">
      <h1>Todos los blogs </h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <span>{blog.name}:</span>
            <p>{blog.texto}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;