import express, { Application } from "express";
import userRoutes from "../routes/ususarios";
import cors from "cors";

import db from '../db/connection'

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: "/api/ususarios",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  //TODO Conectar base de datos
  async dbConnection() {
    try {
      await db.authenticate();
      console.log('BDonline');
      
    } catch ( error ) {
      console.log(error);
      
    }
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());

    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriento en puerto" + this.port);
    });
  }
}

export default Server;
