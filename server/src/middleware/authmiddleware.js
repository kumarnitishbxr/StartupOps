import jwt from "jsonwebtoken";
import User from "../models/User.js";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    // console.log(token)
    if (!token) {
      return res.status(401).json({ message: "No token, authorization denied" });
    }

    const payload = jwt.verify(token, process.env.SECRET_KEY);
    if(!paylaod)
      return res.status(404).json({
        success: false,
        message: "Invalid token"
      })

    const user = await User.findById(payload.id).select("-password");
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();

  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;
