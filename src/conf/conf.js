const conf = {
  appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDbId: String(import.meta.env.VITE_APPWRITE_DB_ID),
  appwriteEventId: String(import.meta.env.VITE_APPWRITE_EVENT_ID),
  appwriteQuestionId: String(import.meta.env.VITE_APPWRITE_QUESTION_ID),
};

export default conf;
