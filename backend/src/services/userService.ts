import { query } from "#config/database.js";
import bcrypt from "bcrypt";

export const userService = {
  async createUser({ email, password }: { email: string; password: string }) {
    const exisitngUser = await query("SELECT id FROM users WHERE email = $1", [email]);

    if (exisitngUser.rows.length > 0) {
      throw new Error("Email already exists");
    }
    const saltRound = 10;

    const salt = await bcrypt.genSalt(saltRound);
    const password_hash = await bcrypt.hash(password, salt);

    const result = await query("INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id, email, created_at", [email, password_hash]);

    return result.rows[0];
  },

  async getUserForLogin(email: string) {
    const result = await query("SELECT id, email, password_hash, created_at FROM users WHERE email = $1", [email]);

    return result.rows[0]; // Returns first user or undefined
  },

  async userLogin({ email, password }: { email: string; password: string }) {
    
    const user = await this.getUserForLogin(email);

    if (!user) {
      throw new Error("User not found");
    }

    const result = await bcrypt.compare(password, user.password_hash);

    if (!result){
      throw new Error("Invalid Login")
    }

    return { id: user.id, email: user.email, created_at: user.created_at };
  },
};
