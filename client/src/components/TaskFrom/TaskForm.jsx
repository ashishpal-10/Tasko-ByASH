import { useState } from "react";
import { createTask } from "../../services/taskApi";
import "./TaskForm.css";

function TaskForm({ onTaskCreated, editingTask, onUpdateTask, onCancelEdit }) {
  const [formData, setFormData] = useState({
    title: editingTask?.title || "",
    description: editingTask?.description || "",
    status: editingTask?.status || "pending",
    priority: editingTask?.priority || "medium",
    dueDate: editingTask?.dueDate ? editingTask.dueDate.split("T")[0] : "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingTask) {
        await onUpdateTask(editingTask._id, formData);
      } else {
        const data = await createTask(formData);
        onTaskCreated(data.task);
      }

      setFormData({
        title: "",
        description: "",
        status: "pending",
        priority: "medium",
        dueDate: "",
      });
    } catch (error) {
      console.error("Failed to save task:", error);
    }
  };

  return (
    <section className="task-form-section">
      <h2>{editingTask ? "EDIT TASK" : "ADD NEW TASK"}</h2>

      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task title"
          value={formData.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <div className="form-row">
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>

          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          <button type="submit">
            {editingTask ? "UPDATE TASK" : "ADD TASK"}
          </button>
          {editingTask && (
            <button type="button" onClick={onCancelEdit} className="cancel-btn">
              CANCEL
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default TaskForm;