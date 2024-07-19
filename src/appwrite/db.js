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

  // Events
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

  async getEvents(userId) {
    try {
      return await this.database.listDocuments(
        conf.appwriteDbId,
        conf.appwriteEventId,
        [Query.equal("userId", userId)]
      );
    } catch (error) {
      console.log("DbService :: getEvents() :: ", error);
    }
  }

  async deleteEvent(eventId) {}

  // Questions
  async createQuestion({ title, answers, eventId }) {
    try {
      return await this.database.createDocument(
        conf.appwriteDbId,
        conf.appwriteQuestionId,
        ID.unique(),
        { title, answers, eventId }
      );
    } catch (error) {
      console.log("DbService :: createQuestions() :: ", error);
    }
  }

  async getQuestion({ questionId }) {
    try {
      // Implement get question with questionId
    } catch (error) {
      console.log("DbService :: getQuestion() :: ", error);
    }
  }
}

const dbService = new DbService();
export default dbService;
