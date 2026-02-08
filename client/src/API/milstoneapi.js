import api from "./authapi";

export const createMilestone = async ({startupId, payload}) => {
  console.log(payload)
  const { data } = await api.post(
    `/api/milestone/${startupId}/milestones`,
    payload
  );
  return data;
};

export const getMilestones = async (startupId) => {
  const { data } = await api.get(
    `/api/milestone/${startupId}/milestones`
  );
  return data;
};

export const updateMilestone = async (milestoneId, payload) => {
  const { data } = await api.put(
    `/api/milestone/${milestoneId}`,
    payload
  );
  return data;
};

export const deleteMilestone = async (milestoneId, status) => {
  const { data } = await api.delete(
    `/api/milestone/${milestoneId}`,
    { status }
  );
  return data;
};
