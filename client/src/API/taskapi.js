import api from './authapi'
export const createTask = async (startupId, payload) => {
  const { data } = await api.post(
    `/startups/${startupId}/tasks`,
    payload
  );
  return data;
};

export const getTasks = async (startupId) => {
  const { data } = await api.get(
    `/startups/${startupId}/tasks`
  );
  return data;
};

export const updateTaskStatus = async (taskId, status) => {
  const { data } = await api.patch(`/tasks/${taskId}/status`, {
    status,
  });
  return data;
};

export const assignTask = async (taskId, userId) => {
  const { data } = await api.patch(`/tasks/${taskId}/assign`, {
    userId,
  });
  return data;
};

export const deleteTask = async (taskId) => {
  const { data } = await api.delete(`/tasks/${taskId}`);
  return data;
};
