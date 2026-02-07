import api from './authapi'
export const createTask = async (startupId, payload) => {
  const { data } = await api.post(
    `/api/tasks/${startupId}/tasks`,
    payload
  );
  return data;
};

export const getTasks = async (startupId) => {
  const { data } = await api.get(
    `/api/tasks/${startupId}/tasks`
  );
  return data;
};

export const updateTaskStatus = async (taskId, status) => {
  const { data } = await api.patch(`/api/tasks/${taskId}`, {
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
  const { data } = await api.delete(`/api/tasks/${taskId}`);
  return data;
};
