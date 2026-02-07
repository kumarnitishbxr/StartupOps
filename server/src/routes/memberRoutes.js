// routes/member.routes.js
import express from "express";
// import { verifyJWT } from "../middlewares/auth.middleware.js";
// import { requireStartupRole } from "../middlewares/role.middleware.js";
import founderMiddleware from "../middleware/FounderMiddleware.js";
import { addMember, getMembers, updateMember, removeMember } from "../Controllers/startupMemberController.js";

const memberRouter = express.Router();

memberRouter.post( "/:startupId/members", founderMiddleware, addMember);
memberRouter.get("/:startupId/members", founderMiddleware, getMembers);
memberRouter.put( "/:startupId/members/:memberId", founderMiddleware,updateMember);
memberRouter.delete("/:startupId/members/:memberId", founderMiddleware, removeMember);



export default memberRouter;
