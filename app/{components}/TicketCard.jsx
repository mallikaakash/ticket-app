import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import Link from "next/link";

function TicketCard({ ticket }) {
  const formatTimeStamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString("en-US");
  };
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <Link href={`/TicketPage/${ticket._id}`}>
        <div className="flex mb-3">
          <PriorityDisplay priority={ticket.priority} />
          <div className="ml-auto">
            <DeleteBlock id={ticket._id} />
          </div>
        </div>
        <h4> {ticket.title}</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{ticket.description}</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs my-1"> {formatTimeStamp(ticket.createdAt)}</p>
            <ProgressDisplay progress={ticket.progress} />
          </div>
          <div className="ml-auto flex item-end">
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default TicketCard;
