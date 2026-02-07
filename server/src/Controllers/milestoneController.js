import Milestone from '../models/Milestone.js';
import Task from '../models/Task.js';

export const createMilestone = async (req, res) => {
  try {
    const { startupId } = req.params;
    if (!startupId)
      return res.status(404).json({ message: 'StartupId required' });

    const milestone = await Milestone.create({
      ...req.body,
      startupId,
    });

    res.status(201).json(milestone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMilestones = async (req, res) => {
  try {
    const { startupId } = req.params;
    if (!startupId)
      return res.status(404).json({ message: 'StartupId required' });

    const milestones = await Milestone.find({ startupId }).sort({
      startDate: 1,
    });

    res.status(200).json(milestones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMilestoneById = async (req, res) => {
  try {
    const milestone = await Milestone.findById(req.params.milestoneId);

    if (!milestone) {
      return res.status(404).json({ message: 'Milestone not found' });
    }

    res.json(milestone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateMilestone = async (req, res) => {
  try {
    const milestone = await Milestone.findByIdAndUpdate(
      req.params.milestoneId,
      req.body,
      { new: true }
    );

    if (!milestone) {
      return res.status(404).json({ message: 'Milestone not found' });
    }

    res.json(milestone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const completeMilestone = async (req, res) => {
  try {
    const { milestoneId } = req.params;

    const pendingTasks = await Task.countDocuments({
      milestoneId,
      status: { $ne: 'DONE' },
    });

    if (pendingTasks > 0) {
      return res.status(400).json({
        message: 'All tasks must be completed before closing milestone',
      });
    }

    const milestone = await Milestone.findByIdAndUpdate(
      milestoneId,
      { status: 'COMPLETED' },
      { new: true }
    );

    res.json(milestone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteMilestone = async (req, res) => {
  try {
    const { milestoneId } = req.params;

    await Task.updateMany({ milestoneId }, { $unset: { milestoneId: '' } });

    await Milestone.findByIdAndDelete(milestoneId);

    res.status(201).json({ message: 'Milestone deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
