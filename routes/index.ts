import { Express } from "express";
import youtubeRoutes from "./youtube.routes";
import notesRoutes from "./notes.routes";
import linkedinRoutes from "./linkedin.routes";
import flightsRoutes from "./flights.routes";

export default (app: Express) => {
  app.use("/youtube", youtubeRoutes);
  app.use("/notes", notesRoutes);
  app.use("/linkedin", linkedinRoutes);
  app.use("/flights", flightsRoutes);
};
