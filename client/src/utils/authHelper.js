export const isAuthenticated = (user) => {
  return Boolean(user && user._id);
};

export const hasRole = (user, startupId, roles = []) => {
  if (!user || !startupId || !roles.length) return false;

  return user.roles?.some(
    (r) => r.startupId === startupId && roles.includes(r.role)
  );
};

export const canAccessStartup = (user, startupId) => {
  return hasRole(user, startupId, ["founder", "admin", "member"]);
};
