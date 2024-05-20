require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 20,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 20,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  try {
    const saltround = await bcrypt.genSalt(11);
    const hash_password = await bcrypt.hash(user.password, saltround);
    user.password = hash_password;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
