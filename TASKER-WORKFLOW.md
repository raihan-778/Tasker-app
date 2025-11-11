# 🗂️ Tasker – React Task Management App

A modern, responsive **Task Management App** built with **React**.  
Tasker helps you organize, search, and manage your daily tasks efficiently with an intuitive interface.

---

## 🚀 Features

### 🧱 Layout

- **Header:** Clean navigation bar with app title or logo.
- **Hero Section:** Advertisement about the app.
- **Footer:** Compact footer for copyright or app version.
- **Task Action:** Quick action button including ADD task Button to add new tasks with title, description, and optional tags or priority & & Delete All Button to delete all tasks at a time.
- **Add Task Card:** Quick modal including form to add new tasks with title, description, and optional tags or priority.
- **No Card Found:** A Component for showing the task status info.

### 📋 Task board

- **Search Bar:** Instantly find tasks by title or keywords.
- **Task List:** Displays all active tasks in a card-style layout.

_Each task includes:_

- ⭐ **Add to Favourite** – Mark important tasks.
- ➕ **Add Task** – Quickly create new tasks.
- 🗑️ **Delete Task** – Remove unwanted tasks.
- ✏️ **Edit Task** – Update existing task details.
- 👁️ **Show Details** – View full task information.

---

## 🧩 Tech Stack

| Category         | Technology                                      |
| ---------------- | ----------------------------------------------- |
| Frontend         | React (Vite or CRA)                             |
| State Management | React Hooks / Zustand / Redux                   |
| Styling          | Tailwind CSS / Styled Components / CSS Modules  |
| Icons            | Lucide React / React Icons                      |
| Utilities        | UUID / Day.js / LocalStorage / Axios (optional) |

---

## 📁 Folder Structure

```
tasker/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── AddTaskCard.jsx
│   │   ├── TaskBoard.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskCard.jsx
│   ├── hooks/
│   ├── store/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/tasker.git
   cd tasker
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the app**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173/
   ```

---

## 🧠 Core Functionality

| Feature        | Description                                |
| -------------- | ------------------------------------------ |
| Add Task       | Create a new task with title & description |
| Edit Task      | Modify existing task details               |
| Delete Task    | Permanently remove a task                  |
| Mark Favourite | Highlight important tasks                  |
| Search         | Filter tasks by name                       |
| Persist Data   | Store tasks locally or via API             |

---

## 🧱 Components Overview

| Component         | Responsibility                                |
| ----------------- | --------------------------------------------- |
| `Header.jsx`      | Displays app title/navigation                 |
| `Footer.jsx`      | Shows footer info                             |
| `AddTaskCard.jsx` | UI for creating new tasks                     |
| `TaskBoard.jsx`   | Main task management board                    |
| `TaskList.jsx`    | Renders all tasks with actions                |
| `TaskCard.jsx`    | Individual task UI with edit/delete/favourite |

---

## 🧰 Customization

You can easily:

- Integrate with a backend (Node.js, Firebase, Supabase)
- Add drag-and-drop (e.g. `react-beautiful-dnd`)
- Implement dark/light themes
- Sync data with APIs

---

## 🧑‍💻 Contributing

1. Fork the project
2. Create a new branch (`feature/new-task-filter`)
3. Commit changes (`git commit -m 'Add new filter feature'`)
4. Push to branch (`git push origin feature/new-task-filter`)
5. Open a Pull Request

---

## 🪪 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

---

## 💡 Author

**MD Raihan Uddin**  
Frontend Developer | React Enthusiast  
🔗 [LinkedIn](https://linkedin.com/in/your-profile) • [GitHub](https://github.com/your-username)

---

> _“Plan your work, work your plan.”_  
> — **Tasker**, a simple yet powerful productivity tool.
