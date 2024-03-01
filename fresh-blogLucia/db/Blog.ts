import mongoose from "npm:mongoose";
import Blog from "../types.ts"; 

if (mongoose.connection.readyState === 0) {
  await mongoose.connect(Deno.env.get("MONGO_URL")!);
}

const schema = new mongoose.Schema<Blog>({
  name: String,
  texto: String,
  fecha:String,
});

export default mongoose.model<Blog>("Blog", schema);