import api from "./authapi";

export const submitFeedback = async (startupId, payload) => {
  const { data } = await api.post(
    `/startups/${startupId}/feedback`,
    payload
  );
  return data;
};

export const getFeedbacks = async (startupId) => {
  const { data } = await api.get(
    `/startups/${startupId}/feedback`
  );
  return data;
};

export const deleteFeedback = async (feedbackId) => {
  const { data } = await api.delete(
    `/feedback/${feedbackId}`
  );
  return data;
};
