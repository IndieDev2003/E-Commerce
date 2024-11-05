import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//Route for user Login
const loginUser = async (req, res) => {
  res.json({
    message: "Login API Working",
  });
};

//route for user registration

const registerUser = async (req, res) => {

    //Start of try block
  try {
    const { name, email, password } = req.body;

    //checking user already exists or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User Already Exists" });
    }

    //validating email and password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter A Valid Email" });
    }
    if (password.length < 8) {
      return res.json({ success: false, message: "Enter A Strong Password" });
    }

    // hashing Password using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({ name, email, password: hashedPassword });
    const user = await newUser.save();

    const token = createToken(user._id);

      //setting jwt token
      res.json({ success: true, token });
      
      //try ended and catch starts here
  } catch (error) {
      console.log(error);
      res.json({success:false})
  }
};

//route for admin login
const adminLogin = async (req, res) => {
  res.json({
    message: "Admin Login API Working",
  });
};

export { loginUser, registerUser, adminLogin };
