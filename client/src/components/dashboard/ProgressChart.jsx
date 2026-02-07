import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ProgressChart = ({
  data,
  xKey = "date",
  yKey = "completedTasks",
  label = "Tasks Completed",
}) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow">
      <h3 className="text-sm font-medium mb-4 text-gray-600">
        {label}
      </h3>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey={xKey} />
          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey={yKey}
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProgressChart;
