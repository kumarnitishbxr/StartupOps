import React from "react";
import api from "./authapi";

export const createStartup = async (payload) => {
  const { data } = await api.post("/startups", payload);
  return data;
};

export const getUserStartups = async () => {
  const { data } = await api.get("/startups");
  return data;
};

export const getStartupById = async (startupId) => {
  const { data } = await api.get(`/startups/${startupId}`);
  return data;
};

export const updateStartup = async (startupId, payload) => {
  const { data } = await api.put(`/startups/${startupId}`, payload);
  return data;
};

export const inviteTeamMember = async (startupId, payload) => {
  const { data } = await api.post(
    `/startups/${startupId}/invite`,
    payload
  );
  return data;
};
