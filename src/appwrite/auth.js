import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ lastName, email, password }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        lastName
      );
      if (userAccount) {
        return this.login({ email, password });
      }
    } catch (error) {
      console.log("AuthService :: createAccount :: ", error);
    }
  }

  async login({ email, password }) {
    try {
      const userSession = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return userSession;
    } catch (error) {
      console.log("AuthService :: login :: ", error);
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      return user;
    } catch (error) {
      console.log("AuthService :: getCurrentUser :: ", error);
    }
  }

  async getSession() {
    try {
      const sessionList = this.account.listSessions();
      return sessionList;
    } catch (error) {
      console.log("AuthService :: getSession :: ", error);
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("AuthService :: logout :: ", error);
    }
  }
}

const authService = new AuthService();
export default authService;
