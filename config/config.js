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

export { DB_ACCESS };