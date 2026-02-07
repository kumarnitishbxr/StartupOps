import clsx from "clsx";

const AnalyticsCard = ({
  title,
  value,
  subtitle,
  trend,        // number (optional)
  trendLabel,   // "vs last week" (optional)
  loading = false,
}) => {
  if (loading) {
    return (
      <div className="p-5 bg-white rounded-lg shadow animate-pulse h-28" />
    );
  }

  return (
    <div className="p-5 bg-white rounded-lg shadow">
      <p className="text-sm text-gray-500">{title}</p>

      <h3 className="text-2xl font-semibold mt-1">
        {value}
      </h3>

      {subtitle && (
        <p className="text-xs text-gray-400 mt-1">
          {subtitle}
        </p>
      )}

      {trend !== undefined && (
        <div className="mt-2 text-xs flex items-center gap-1">
          <span
            className={clsx(
              trend >= 0 ? "text-green-600" : "text-red-600"
            )}
          >
            {trend >= 0 ? "▲" : "▼"} {Math.abs(trend)}%
          </span>
          <span className="text-gray-400">
            {trendLabel}
          </span>
        </div>
      )}
    </div>
  );
};

export default AnalyticsCard;
