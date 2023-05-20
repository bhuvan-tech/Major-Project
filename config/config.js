import "dotenv/config";

const loadEnv = (key) => {
  if (key === undefined || key === "" || key.trim() === "") {
    console.error("Missing env variable(s)");
    process.exit(1);
  }

  return key.trim();
};

// db config 
const DB_ACCESS = loadEnv(process.env.DB_ACCESS);

//hasing

const salt = loadEnv(process.env.SALT);
const SALT = parseInt(salt)

//token config
const JWT_SECRET= loadEnv(process.env.JWTSECRET); 
const TOKEN_EXPIRY =  loadEnv(process.env.TOKEN_EXPIRY);

//port config
const PORT = loadEnv(process.env.PORT);

export { DB_ACCESS,SALT,JWT_SECRET,TOKEN_EXPIRY,PORT };