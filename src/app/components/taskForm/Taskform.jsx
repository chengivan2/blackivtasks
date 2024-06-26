"use client";

export const dynamic = 'force-dynamic'

import dynamic from "next/dynamic";
import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import "@/app/componentsStyles/taskform.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const DynamicKindeAuth = dynamic(() => import("@kinde-oss/kinde-auth-nextjs"), {
  ssr: false,
});

export default function Taskform() {
  const { isLoading, isAuthenticated } = DynamicKindeAuth.useKindeBrowserClient();
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const notifyAddTodoMessage = (
    <p>Your task has been added successfully! &#x1F389;!</p>
  );

  const notifyAddTodoErrorMessage = (
    <p>There was an error! Please try adding again.</p>
  );

  const notifyAddTodo = () => toast.dark(notifyAddTodoMessage);
  const notifyAddTodoError = () => toast.error(notifyAddTodoErrorMessage);

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleTaskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const response_from_create_api = await fetch("https://blackivtasks.vercel.app/api/add_new_task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { taskName, taskDescription },
      });

      if (!response_from_create_api.ok) {
        notifyAddTodoError();
        throw new Error(
          `HTTP error! Status: ${response_from_create_api.status}`
        );
      } else {
        notifyAddTodo();
      }
    } catch (error) {
      console.error(error.message);
    }

    setTaskName("");
    setTaskDescription("");
  };

  if (isLoading)
    return (
      <div>
        <p>Hey there! Please be patient, we are fetching your data.</p>
      </div>
    );

  return isAuthenticated ? (
    <div className="form-container">
      <h4>User</h4>
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
  ) : (
    <p>
      You need to <DynamicKindeAuth.LoginLink>Login</DynamicKindeAuth.LoginLink>
    </p>
  );
}
