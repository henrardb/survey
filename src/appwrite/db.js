import conf from "../conf/conf";
import { Client, Databases, Query } from "appwrite";
import { ID } from "appwrite";

export class DbService {
  client = new Client();
  database;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);

    this.database = new Databases(this.client);
  }

  async createEvent({ name, userId }) {
    try {
      console.log(conf.appwriteDbId, conf.appwriteEventId, userId);
      return await this.database.createDocument(
        conf.appwriteDbId,
        conf.appwriteEventId,
        ID.unique(),
        { name, userId }
      );
    } catch (error) {
      console.log("DbService :: createEvent() :: ", error);
    }
  }

  async updateEvent(eventId, { name, questions }) {}

  async getEvent(eventId) {}

  async getEvents(query) {}

  async deleteEvent(eventId) {}
}

const dbService = new DbService();
export default dbService;
