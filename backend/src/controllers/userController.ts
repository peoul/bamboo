import { Request, Response, NextFunction } from "express";

import { userService } from "#services/userService.js";
import { createToken } from "#utils/jwt.js";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email or Password is Missing" });
    }

    const user = await userService.createUser({ email, password });

    res.status(201).json({
      success: true,
      user: { id: user.id, email: user.email },
    });
  } catch (e: unknown) {
    console.error("Create user error", e);

    if (e instanceof Error && e.message === "Email already exists") {
      return res.status(409).json({ error: "Failed to create user" });
    }
    res.status(500).json({ error: "Failed to create user" });
  }
};

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email or Password is Missing" });
    }

    const user = await userService.userLogin({ email, password });

    const token =  await createToken({userId: user.id, email:user.email})

    res.status(200).json({
      success: true,
      user: user,
      token:token
    });
    
  } catch (e: unknown) {
    console.error("Account Login Error:", e);

    if (e instanceof Error && (e.message === "Invalid Login" || e.message === "User not found")) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    res.status(500).json({ error: "Login Failed" });
  }
};
