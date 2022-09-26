import React, { useEffect, useState } from "react";

const initial = { full_name: "", phone_number: "" };

// Contacts component'indan addContact'i buraya gonderdim.
function Form({ setContacts, contacts }) {
  const [form, setForm] = useState(initial);

  useEffect(() => {
    setForm(initial);
  }, [contacts]);

  // formun her bir degerini alip e.target.name'ini e.target.value'suna esitliyorsun.
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // formun default davranisini engellemek icin e.preventDefault kullan.
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.full_name === "" || form.phone_number === "") {
      return false;
    }
    setContacts([...contacts, form]);
    //fonk icinde de initial degerini set edebiliriz, useEffect icinde de
    // setForm(initial);

    // bir liste haline getirmek icin
    // kontaklarin herbirini alip formdaki bilgileri bu kontaklara ekle.
    console.log(form);
  };
  return (
    <>
      <h3> Add a New Contact</h3>
      <form onSubmit={onSubmit}>
        <div>
          <input
            name="full_name"
            placeholder="Full Name"
            value={form.full_name}
            onChange={onChangeInput}
          ></input>
        </div>
        <div>
          <input
            name="phone_number"
            placeholder="Phone Number"
            value={form.phone_number}
            onChange={onChangeInput}
          ></input>
        </div>
        <div className="btn">
          <button>Add</button>
        </div>
      </form>
    </>
  );
}

export default Form;
