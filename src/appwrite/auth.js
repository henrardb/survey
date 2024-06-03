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

  createAccount() {}

  getCurrentUser() {}

  login(email, password) {}

  logout() {}
}

const authService = new AuthService();
export default authService;
