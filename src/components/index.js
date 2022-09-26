import React, { useState, useEffect } from "react";
import {} from "./style.css";

import List from "./Contacts/List";
import Form from "./Contacts/Form";

function Contacts() {
  //iki component arasi iletisimi saglamak icin contact'i burada tutuyorum.

  const [contacts, setContacts] = useState([
    {
      full_name: "Seval",
      phone_number: 55555,
    },
    {
      full_name: "Kaan",
      phone_number: 66666,
    },
    {
      full_name: "Bade",
      phone_number: 33333,
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form setContacts={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
