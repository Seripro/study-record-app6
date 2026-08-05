import { Hono } from "hono";
import { prisma } from "../../lib/prisma.js";

const recordRoute = new Hono();

recordRoute.get("/records", async (c) => {
  const allRecords = await prisma.record.findMany();
  return c.json(allRecords);
});

type NewRecord = {
  title: string;
  time: number;
};

recordRoute.post("/records", async (c) => {
  const { title, time } = await c.req.json<NewRecord>();
  const inserted = await prisma.record.create({ data: { title, time } });

  if (inserted === undefined) {
    return c.json({ error: "Failed to create study record" }, 500);
  }

  return c.json(
    {
      id: inserted.id,
      title: inserted.title,
      time: inserted.time,
    },
    200,
  );
});

export default recordRoute;
