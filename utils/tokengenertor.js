import jwt from "jsonwebtoken";
import { JWT_SECRET, TOKEN_EXPIRY } from "../config/config.js";
function jwtGenerator(id, name, number) {
    const payload = {
      user: {
        id,
        name,
        number
      },
    }
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: TOKEN_EXPIRY,
      });
}

export default jwtGenerator;