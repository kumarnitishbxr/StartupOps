import React from "react";
import api from "./authapi";

export const createStartup = async (payload) => {
  const { data } = await api.post("/api/startup", payload);
  return data;
};

export const getUserStartups = async () => {
  const { data } = await api.get("/api/startup");
  return data;
};

export const getStartupById = async (startupId) => {
  const { data } = await api.get(`/api/startup/${startupId}`);
  return data;
};

export const updateStartup = async (startupId, payload) => {
  const { data } = await api.patch(`/api/startup/${startupId}`, payload);
  return data;
};

export const inviteTeamMember = async (startupId, payload) => {
  const { data } = await api.post(`/api/member/${startupId}/members`,payload
  );
  return data;
};

export const getTeamMember = async (startupId, payload) => {
  const { data } = await api.get(`/api/member/${startupId}/members`,payload
  );
  return data;
};
