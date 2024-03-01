import { FreshContext, Handlers } from "$fresh/server.ts";
import Iniciar from "../components/iniciarsesion.tsx";
import AddBlog from "../components/AddBlog.tsx"; 
import Blog from "../db/Blog.ts"; 
import BlogModel from "../db/Blog.ts"; 

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    try {
      const form = await req.formData();
      const data = {
        contraseña: form.get("contraseña"),
        
      };

      const contraseñaValida = "lucia"; 


      if(data.contraseña == contraseñaValida){
      return new Response("", {
        status: 303,
        headers: {
          "Location": "/add", 
        },
      });}

      else {
        return new Response("¡Contraseña incorrecta!", {
            status: 400, // Bad Request
          });
        }
    
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
      < Iniciar/>
    </div>
  );
};

export default Page;