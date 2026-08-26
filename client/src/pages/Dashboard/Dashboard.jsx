import Navbar from "../../components/Navbar/Navbar";
import TaskForm from "../../components/TaskFrom/TaskForm";
import TaskList from "../../components/TaskList/TaskList";


import { useEffect, useState } from 'react'
import { getTasks ,deleteTask,updateTask } from '../../services/taskApi.js'

function Dashboard() {

  const [newTask, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data.tasks);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  // Add new task to existing tasks
  const handleTaskCreated = (task) => {
   setTasks((prevTasks) => [task, ...prevTasks]);
  };

  const handleDeleteTask = async(id)=>{

    try {
      await deleteTask(id);

      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id))
      
    } catch (error) {
      console.log("Failed to Delete task",error)
    }
  }


  const handleEditTask =(task) =>{
    setEditingTask(task);
  }


  const handleUpdateTask = async(id,taskData)=>{
    try {

      const data = await updateTask(id,taskData);
      setTasks((prevTasks)=>{
       return  prevTasks.map((task)=>task._id === id ? data.task :task)
      });

      setEditingTask(null)
      
    } catch (error) {
      console.log("Failed to Update task",error)
    }
  }

  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
       <TaskForm onTaskCreated={handleTaskCreated} editingTask={editingTask} onUpdateTask={handleUpdateTask} onCancelEdit={()=>setEditingTask(null)} />

         <TaskList newTask={newTask} onDelete={handleDeleteTask} onUpdate={handleEditTask}/>
      </main>
    </div>
  );
}

export default Dashboard;