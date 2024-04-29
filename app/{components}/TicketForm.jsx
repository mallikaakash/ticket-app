"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function TicketForm() {
  const router = useRouter();
  const startingTicketata = {
    title: "",
    description: "",
    priority: 1,
    status: "not started",
    progress: 0,
    category: "Hardware Issue",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "appication/json",
    });

    if (!res.ok) {
      throw new Error("Failed to create Ticket.");
    }

    router.refresh();
    router.push(".././");
  };

  const [formData, setFormData] = useState(startingTicketata);
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create Your Ticket</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
        />

        <label>Description</label>
        <textarea
          id="description"
          name="description"
          type="text"
          value={formData.description}
          onChange={handleChange}
          required={true}
          rows="5"
        />

        <label>Category</label>
        <select
          id="title"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Problem"> Hardware Problem</option>
          <option value="Software Problem"> Software Problem</option>
          <option value="Project"> Project</option>
        </select>

        <label>Priority</label>
        <div>
          <input
            id="priority"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label>1</label>

          <input
            id="priority"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>

          <input
            id="priority"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label>3</label>

          <input
            id="priority"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>

          <input
            id="priority"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>

        <label> Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />

        <label> Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started"> Not Started</option>
          <option value="started"> Started</option>
          <option value="done"> Done </option>
        </select>

        <input type="submit" className="btn" value="Create Ticket" />
      </form>
    </div>
  );
}

export default TicketForm;
