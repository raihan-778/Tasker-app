import { useState } from "react";
import AddTaskModal from "../AddTaskModal";
import SearchBox from "./SearchBox";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const defaultTask = [
    {
      id: crypto.randomUUID(),
      title: "Build Responsive Navbar",
      description:
        "A demo showing how to build a responsive navigation bar using Tailwind CSS and JavaScript.",
      tags: ["Tailwind", "JavaScript", "UI"],
      priority: "High",
      isFavourite: true,
    },
  ];

  const [tasks, setTasks] = useState(defaultTask);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  function handleAddTask(newTask, isAdd) {
    console.log("New Task Added:", isAdd);
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          } else {
            return task;
          }
        })
      );
    }
    setShowAddModal(false);
  }

  function handleEditTask(task) {
    setTaskToEdit(task);
    console.log("Task edited:", task);
    setShowAddModal(true);

    // setEditTask  ({
    //   ...task,
    //   [task.name]:task.value
    // })
  }

  return (
    <>
      <section className="mb-20" id="tasks">
        {showAddModal && (
          <AddTaskModal taskToEdit={taskToEdit} onSave={handleAddTask} />
        )}
        <div className="container">
          <SearchBox />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions handleAddClick={() => setShowAddModal(true)} />
            <TaskList onEdit={handleEditTask} tasks={tasks} />
          </div>
        </div>
      </section>
    </>
  );
}
