import "./TaskList.css"

const TaskList = ({newTask,onDelete,onUpdate}) => {

    const tasks = newTask || [];

    return (
        <section>
            <h2>YOUR TASKS</h2>

            <div className="task-list">


                {
                    tasks.length === 0 ? (
                        <p>No tasks found</p>
                    ) :

                        (
                            tasks.map((task) => (
                                <div className="task-card" key={task._id}>

                                    <div className="task-info">
                                        <h3>{task.title}</h3>

                                        <p>{task.description}</p>

                                        <div className="task-tags">
                                            <span>{task.status}</span>
                                            <span>{task.priority}</span>
                                        </div>
                                    </div>

                                    <div className="task-actions">
                                        <div className="duedate">
                                        <h4>Due Date :</h4>
                                        <span> {new Date(task.dueDate).toLocaleDateString()}</span>
                                        </div>

                                        <div>
                                            <button onClick={()=> onUpdate(task)}>EDIT</button>
                                            <button onClick={()=> onDelete(task._id)}>DELETE</button>
                                        </div>
                                    </div>

                                </div>
                            ))
                        )


                }
            </div>
        </section>
    )
}

export default TaskList 