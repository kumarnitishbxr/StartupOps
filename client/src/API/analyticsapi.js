import api from "./authapi";

export const getStartupAnalytics = async (startupId) => {
  const { data } = await api.get(
    `/startups/${startupId}/analytics`
  );
  return data;
};

export const refreshAnalytics = async (startupId) => {
  const { data } = await api.post(
    `/startups/${startupId}/analytics/refresh`
  );
  return data;
};
