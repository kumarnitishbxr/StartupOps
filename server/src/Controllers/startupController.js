import Startup from "../models/Startup.js";
import User from "../models/User.js";



export const addStartup = async (req, res)=>{

   try {
      
      const {name} = req.body || {}
      if(!name)
         return res.status(400).json({message:"Name is required"});

      const existStartup = await Startup.findOne({name});
      if(existStartup)
         return res.status(400).json({message:"Startup already exists"});
      
      const startup = await Startup.create({
         ...req.body,
         founder: req.user?._id
      });

      const user = await User.findById(req.user?._id);
      user.startups.push({startupId:startup._id, role:"FOUNDER"});
      await user.save();

      return res.status(200).json({
         success: true,
         message: "Startup created successfully",
         data: startup
      });

   } catch (error) {
      
   }
}



export const getAllStartups = async (req, res)=>{

   try{

      const startups = await Startup.find({}).populate("founder");
      return res.status(200).json({
         success: true,
         message: "Startups fetched successfully",
         data: startups
      });
   }
   catch(error){
      res.status(500).json({
         success: false,
         message: error.message
      })
   }
}


export const getStartupById = async (req, res)=>{

   try {
      
      const {startupId} = req.params
      if(!startupId)
         return res.status(400).json({message:"Startup id is required"});

      const startup = await Startup.findById(startupId).populate("founder");
      return res.status(200).json({
         success: true,
         message: "Startup fetched successfully",
         data: startup
      });

   } catch (error) {
      res.status(500).json({
         error: error.message
      })
   }

}


export const updateStartupById = async (req, res)=>{

   try {
      
      const {startupId} = req.params
      if(!startupId)
         return res.status(400).json({message:"Startup id is required"});

      const startup = await Startup.findByIdAndUpdate(startupId, req.body);
      return res.status(200).json({
         success: true,
         message: "Startup updated successfully",
         data: startup
      });
   } catch (error) {
      res.status(500).json({error:error.message})
   }
}


export const deleteStartup = async (req, res)=>{

   try {
      
      const {startupId} = req.params
      if(!startupId)
         return res.status(400).json({message:"Startup id is required"});

      const startup = await Startup.findByIdAndDelete(startupId);
      return res.status(200).json({
         success: true,
         message: "Startup deleted successfully",
         data: startup
      });

   } catch (error) {
      res.status(500).json({error:error.message})
   }
}