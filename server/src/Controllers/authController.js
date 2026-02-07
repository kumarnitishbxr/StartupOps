import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import redisClient from "../config/redis.js";
import { validate } from "../utils/validate.js";



const cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  maxAge: 24 * 60 * 60 * 1000
};


const Register = async (req, res) => {
  
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const result = validate(req.body);
    if (!result.success) {
      return res.status(400).json({
        message: result.message,
      });
    }

    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    // console.log('first')
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      ...req.body,
      password: hashedPassword
    });

    const token = jwt.sign(
      { id: user._id, email: user.email, role: 'FOUNDER' },
      process.env.SECRET_KEY,
      { expiresIn: process.env.JWT_EXP }
    );

    res.cookie("token", token, cookieOptions);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user:{
        _id:user._id,
        name:user.name,
        email:user.email,
        role:user.role,
        isActive:user.isActive,
        startups:user.startups,
        createdAt:user.createdAt,
        updatedAt:user.updatedAt
      }
    });

  } catch (error) {
    // console.error("REGISTER ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};


const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password required"
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role:user.role },
      process.env.SECRET_KEY,
      { expiresIn: process.env.JWT_EXP }
    );

    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      success: true,
      message: "User login successful",
      user:{
        _id:user._id,
        name:user.name,
        email:user.email,
        role:user.role,
        isActive:user.isActive,
        startups:user.startups,
        createdAt:user.createdAt,
        updatedAt:user.updatedAt
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Login failed",
      error: error.message
    });
  }
};


const Logout = async (req, res) => {
  try {
    
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token, authorization denied" });
    }

    const payload = jwt.decode(token, process.env.SECRET_KEY)

    await redisClient.set(`token:${token}`, "blocked");
    await redisClient.expireAt(`token:${token}`, payload.exp);

    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none"
    });

    res.status(200).json({
      success: true,
      message: "User logged out successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Logout failed",
      error: error.message
    });
  }
};


const checkUser = async (req, res)=>{

  try {
    
    const reply = req.user
    res.status(200).json({
      success: true,
      message: "User Authenticated successfully",
      user:{
        _id:reply._id,
        name:reply.name,
        email:reply.email,
        role:reply.role,
        isActive:reply.isActive,
        startups:reply.startups,
        createdAt:reply.createdAt,
        updatedAt:reply.updatedAt
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Auth failed",
      error: error.message
    })
  }
}

export { Register, Login, Logout, checkUser };
