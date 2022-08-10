import React, { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((contact) => {
    return Object.keys(contact).some((key) => {
      return contact[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase());
    });
  });
  return (
    <div>
      <input
        placeholder="Filter Contacts"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      ></input>
      <ul>
        {filtered.map((contact, i) => (
          <li key={i}>
            {" "}
            {contact.full_name}: {contact.phone_number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
