import api from "./authapi";

export const createMilestone = async (startupId, payload) => {
  const { data } = await api.post(
    `/startups/${startupId}/milestones`,
    payload
  );
  return data;
};

export const getMilestones = async (startupId) => {
  const { data } = await api.get(
    `/startups/${startupId}/milestones`
  );
  return data;
};

export const updateMilestone = async (milestoneId, payload) => {
  const { data } = await api.put(
    `/milestones/${milestoneId}`,
    payload
  );
  return data;
};

export const updateMilestoneStatus = async (milestoneId, status) => {
  const { data } = await api.patch(
    `/milestones/${milestoneId}/status`,
    { status }
  );
  return data;
};
