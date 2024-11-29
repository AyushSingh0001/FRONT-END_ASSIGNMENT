import React, { useState } from "react";
import FilterBar from "./components/FilterBar";
import TicketBoard from "./components/TicketBoard";
import ticketData from "./data/tickets.json";

function App() {
  const [grouping, setGrouping] = useState("status"); // Group by status initially
  const [sortOrder, setSortOrder] = useState("priority"); // Sort by priority initially

  return (
    <div>
      <h1>Ticket Management System</h1>
      <FilterBar setGrouping={setGrouping} setSortOrder={setSortOrder} />
      <TicketBoard tickets={ticketData} grouping={grouping} sortOrder={sortOrder} />
    </div>
  );
}

export default App;