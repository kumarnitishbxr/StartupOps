// controllers/member.controller.js
import StartupMember from "../models/Startupmember.js";
import User from "../models/User.js";



export const addMember = async (req, res) => {

   try {
      const { startupId } = req.params;
      if(!startupId)
         return res.status(404).json({message:"StartupId required"})

      const { email, role, permissions } = req.body;
      if(!email || !role)
         return res.status(404).json({message: "Invalid user info"})

      const user = await User.findOne({ email });
      if (!user) {
         return res.status(404).json({ message: "User not found" });
      }

      const member = await StartupMember.create({
         startupId,
         userId: user._id,
         role: role || "MEMBER",
         permissions: permissions || []
      });

      res.status(201).json(member);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};



export const getMembers = async (req, res) => {
   
   try {
      
      const { startupId } = req.params;
      if(!startupId)
         return res.status(404).json({message: "Invalid user info"})

      const members = await StartupMember.find({ startupId }).populate("userId", "name email");
      if(!members)
         return res.status(200).json({message:"user not found"})

      res.status(200).json(members);
   } catch (error) {
      res.status(500).json(error.message)
   }
};



export const updateMember = async (req, res) => {

   try {
      const { memberId } = req.params;
      const { role, permissions } = req.body;

      const member = await StartupMember.findByIdAndUpdate(
         memberId,
         { role, permissions },
         { new: true }
      );

      if (!member){
         return res.status(404).json({ message: "Member not found" });
      }

      res.status(200).json(member);
   } catch (error) {
      res.status(500).json({mesage:error.message})
   }
};




export const removeMember = async (req, res) => {
   
   try {
      const { memberId } = req.params;

      await StartupMember.findByIdAndDelete(memberId);
      res.status.json({ message: "Member removed successfully" });
   } catch (error) {
      res.status(500).json({message:error.message})
   }
};
