const { User } = require("../db");
const { JWT_SECRET } = require("../config");

const zod = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express");
const authMiddleware = require("../middleware");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const signupInputSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(8).max(20),
    firstName: zod.string().max(50),
    lastName: zod.string().max(50),
  });

  const result = signupInputSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(411).json({
      error: "Inputs are not valid",
    });
  }

  try {
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(411).json({
        error: "User already exists",
      });
    }

    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });

    const userId = newUser._id;

    const token = jwt.sign(
      {
        userId,
      },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.json({
      msg: "User created successfully",
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal server error.",
    });
  }
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(401).json({
        error: "User not exist.",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        error: "Invalid username or password.",
      });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.json({
      msg: "Sign-in successfull.",
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Internal server error.",
    });
  }
});

router.put("/", authMiddleware, async (req, res) => {
  const updatedUsedData = zod.object({
    password: zod.string().min(8).max(20).optional(),
    firstName: zod.string().max(50).optional(),
    lastName: zod.string().max(50).optional(),
  });

  try {
    const result = updatedUsedData.safeParse(updatedUsedData);
    if (!result.success) {
      return res.status(400).json({
        error: "Invalid input.",
      });
    }

    await User.updateOne({ _id: req.userId }, req.body);
    return res.json({
      mssg: "Details updated successfully.",
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({
      mssg: "Internal server error",
    });
  }
});

module.exports = router;
