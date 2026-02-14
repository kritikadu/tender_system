import type { Express } from "express";
import type { Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get("/api/health", (req, res) => {
    res.json({
      ok: true,
      message: "Backend connected with frontend"
    });
  });

  return httpServer;
}
