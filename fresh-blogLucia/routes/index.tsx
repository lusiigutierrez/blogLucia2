import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import BlogList from "../components/Blogs.tsx";

import BlogModel from "../db/Blog.ts"; 

type Data = {
  blogs: Array<Blog>;
};

export const handler: Handlers<Data> = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const blogs = await BlogModel.find();
    return ctx.render({ blogs });
  },
};

export default function Home(props: PageProps<Data>) {
  return (
    <BlogList
      blogs={props.data.blogs}
    />
  );
}