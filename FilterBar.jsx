import React from "react";

const FilterBar = ({ setGrouping, setSortOrder }) => {
  return (
    <div className="filter-bar">
      <div>
        <label>Group By: </label>
        <select onChange={(e) => setGrouping(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div>
        <label>Sort By: </label>
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
