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
      <p> {filtered.length} contact(s) on your list.</p>

      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span> {contact.full_name}: </span>
            <span> {contact.phone_number}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
