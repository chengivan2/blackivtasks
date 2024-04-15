"use client";

import React, { createContext, useState } from "react";
import Taskform from "./taskForm/Taskform";
import "@/app/componentsStyles/taskmain.css";

// Create a new context and export
export const TaskAddedContext = createContext();

// Create a Context Provider
const TaskAddedContextProvider = ({ children }) => {
  const [taskAdded, setTaskAdded] = useState(false);

  return (
    <TaskAddedContext.Provider value={{ taskAdded, setTaskAdded }}>
      {children}
    </TaskAddedContext.Provider>
  );
};

export default function Taskmain() {
  return (
    <>
      <TaskAddedContextProvider>
        <section className="task-form-section">
          <Taskform />
        </section>

        <section className="your-tasks-section">
          <div></div>

          <div className="all-tasks"></div>
        </section>
      </TaskAddedContextProvider>
    </>
  );
}
