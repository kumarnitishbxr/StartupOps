import TaskCard from "./TaskCard";

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((t, i) => (
        <TaskCard key={i} task={t} />
      ))}
    </div>
  );
};

export default TaskList;
