import { FreshContext, Handlers } from "$fresh/server.ts";
import AddBlog from "../components/AddBlog.tsx"; 
import BlogModel from "../db/Blog.ts"; 

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    try {
      const form = await req.formData();
      const data = {
        name: form.get("name"),
        texto: form.get("texto"),
        fecha: form.get("fecha"),
        
      };

      await BlogModel.create(data);

      return new Response("", {
        status: 303,
        headers: {
          "Location": "/", /* Vuelve a la pagina de inicio  */
        },
      });
    } catch (error) {
      return new Response(error.message, {
        status: 500,
      });
    }
  },
};

const Page = () => {
  return (
    <div>
      <AddBlog />
    </div>
  );
};

export default Page;