export const formatDate = (date) => {
  if (!date) return "-";
  return new Date(date).toLocaleDateString();
};

export const calculateCompletionRate = (completed, total) => {
  if (!total || total === 0) return 0;
  return Math.round((completed / total) * 100);
};

export const normalizeTimeline = (data = []) => {
  return data.map((item) => ({
    ...item,
    date: formatDate(item.date),
  }));
};

export const truncateText = (text = "", limit = 100) => {
  if (text.length <= limit) return text;
  return `${text.substring(0, limit)}...`;
};
