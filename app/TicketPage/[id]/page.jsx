import TicketForm from "@/app/{components}/TicketForm";
import React from "react";

const getTicketById = async (id) => {
  const response = await fetch(`http://localhost:3000/api/Tickets/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch Ticket.");
  }
  const data = await response.json();
  return data;
};

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let updateTicketData = {};

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.ticket;
  } else {
  }
};

export default TicketPage;
