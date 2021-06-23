const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_DB = process.env.MONGO_DB;
const USERS_TABLE = process.env.USERS_TABLE;

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

const DROPBOX_ACCESS_TOKEN = process.env.DROPBOX_ACCESS_TOKEN;
const DROPBOX_BASE_URL = "https://api.dropboxapi.com/2";
const DROPBOX_BASE_PATH = process.env.DROPBOX_BASE_PATH;

const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.ljlyq.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`;

module.exports = {
  MONGO_URI,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_DB,
  USERS_TABLE,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  DROPBOX_ACCESS_TOKEN,
  DROPBOX_BASE_URL,
  DROPBOX_BASE_PATH,
};
