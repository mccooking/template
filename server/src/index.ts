import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: "http://localhost:5000",
  }),
);

app.get("/", (c) => c.json({ message: "Hello, world!" }));

export default app;
