const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

main().catch((err) => console.log(err));

async function main() {
  mongoose.connect(
    "mongodb+srv://mayanktiwari:Maya1234@cluster0.r54hiez.mongodb.net/paytm"
  );
}

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
