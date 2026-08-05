import { Hono } from "hono";
import recordRoute from "./features/study-record/route.js";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.route("/", recordRoute);

export default app;
