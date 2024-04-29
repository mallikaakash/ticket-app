import React from "react";
import TicketCard from "./{components}/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-cache",
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueTickets = [...new Set(tickets?.map(({ category }) => category))];
  return (
    <div className="p-5">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        {tickets &&
          uniqueTickets.map((category, index) => (
            <div key={index} className="mb-4">
              <h2>{category}</h2>
              <div className="flex flex-col gap-3">
                {tickets
                  .filter((ticket) => ticket.category === category)
                  .map((ticket, index) => (
                    <TicketCard key={index} id={index} ticket={ticket} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
