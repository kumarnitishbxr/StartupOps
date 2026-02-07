const TaskCard = ({ task }) => {
  return (
    <div className="p-3 border mb-2">
      <h4>{task.title}</h4>
      <p>Status: {task.status}</p>
    </div>
  );
};

export default TaskCard;
