import api from "./authapi";

export const getStartupAnalytics = async (startupId) => {
  const { data } = await api.get(`/api/analytics/${startupId}/analytics/overview` );
  return data;
};

export const refreshAnalytics = async (startupId) => {
  const { data } = await api.post(
    `/api/analytics/${startupId}/analytics/feedback`
  );
  return data;
};
