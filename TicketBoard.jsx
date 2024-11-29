import React from "react";
import TicketCard from "./TicketCard";

const TicketBoard = ({ tickets, grouping, sortOrder }) => {
  // Group tickets dynamically based on the selected grouping
  const groupTickets = (tickets, grouping) => {
    return tickets.reduce((groups, ticket) => {
      const key = ticket[grouping];
      if (!groups[key]) groups[key] = [];
      groups[key].push(ticket);
      return groups;
    }, {});
  };

  // Sort tickets within groups based on the selected sorting order
  const sortTickets = (group, sortOrder) => {
    return group.sort((a, b) => {
      if (sortOrder === "priority") {
        const priorityOrder = { High: 3, Medium: 2, Low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      }
      if (sortOrder === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  };

  const groupedTickets = groupTickets(tickets, grouping);

  return (
    <div className="ticket-board">
      {Object.keys(groupedTickets).map((groupKey) => (
        <div key={groupKey} className="ticket-group">
          <h2>{groupKey}</h2>
          {sortTickets(groupedTickets[groupKey], sortOrder).map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TicketBoard;
