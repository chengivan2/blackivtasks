"use client";

import React, { useContext, useState } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { TaskAddedContext } from "@/app/components/Taskmain";
import * as Form from "@radix-ui/react-form";
import "@/app/componentsStyles/taskform.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Taskform() {
  const { user } = useKindeBrowserClient();
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const { setTaskAdded } = useContext(TaskAddedContext);

  const notifyAdd = () => toast("Task added successfully!");

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleTaskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const response_from_create_api = await fetch("/api/create-todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ taskName, taskDescription }),
      });

      if (!response_from_create_api.ok) {
        throw new Error(
          `HTTP error! Status: ${response_from_create_api.status}`
        );
      } else {
        setTaskAdded(true);
        notifyAdd();
      }
    } catch (error) {
      console.error(error.message);
    }

    setTaskName("");
    setTaskDescription("");
  };

  return (
    <div className="form-container">
      <h4>User</h4>

      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Form.Root className="FormRoot" onSubmit={onSubmitForm}>
        <Form.Field className="FormField" name="taskname">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel">Task Name</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter a task
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="Input"
              type="text"
              value={taskName}
              onChange={handleTaskNameChange}
              placeholder="Enter your task name"
              required
            />
          </Form.Control>
        </Form.Field>

        <Form.Field className="FormField" name="taskdescription">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel">Task Description</Form.Label>
          </div>
          <Form.Control asChild>
            <textarea
              className="Textarea"
              value={taskDescription}
              onChange={handleTaskDescriptionChange}
              placeholder="Add a description for your task"
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button className="Button" style={{ marginTop: 10 }}>
            Add Task
          </button>
        </Form.Submit>
      </Form.Root>
      <ToastContainer />
    </div>
  );
}
