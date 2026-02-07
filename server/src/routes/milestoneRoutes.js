import express from 'express';
import {
  completeMilestone,
  createMilestone,
  deleteMilestone,
  getMilestoneById,
  getMilestones,
  updateMilestone,
} from '../Controllers/milestoneController.js';

const milestoneRouter = express.Router();

milestoneRouter.post('/:startupId/milestones', createMilestone);
milestoneRouter.get('/:startupId/milestones', getMilestones);
milestoneRouter.get('/:milestoneId', getMilestoneById);
milestoneRouter.put('/:milestoneId', updateMilestone);
milestoneRouter.patch('/:milestoneId/complete', completeMilestone);
milestoneRouter.delete('/:milestoneId', deleteMilestone);

export default milestoneRouter;
