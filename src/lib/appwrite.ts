import { Client, Databases, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite Endpoint
  .setProject("688784fa002c46545791"); // Your project ID from Appwrite console

export const databases = new Databases(client);

// Replace these with your actual IDs from Appwrite
export const DATABASE_ID = "6887852e001538eb5deb";
export const COLLECTION_ID = "6887854f0017e51a18f8";

export { ID };
