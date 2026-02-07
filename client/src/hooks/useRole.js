import { useMemo } from "react";

const useRole = (user, startupId) => {
  const role = useMemo(() => {
    if (!user || !startupId) return null;

    const roleEntry = user.roles?.find(
      (r) => r.startupId === startupId
    );

    return roleEntry?.role || null;
  }, [user, startupId]);

  const isFounder = role === "founder";
  const isAdmin = role === "admin" || isFounder;
  const isMember = role === "member";

  return {
    role,
    isFounder,
    isAdmin,
    isMember,
    canEdit: isAdmin,
    canDelete: isFounder,
  };
};

export default useRole;
