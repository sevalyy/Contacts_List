import React, { useState } from "react";

function Form() {
  const [form, setForm] = useState({ full_name: "", phone_number: "" });

  // formun her bir degerini alip e.target.name'ini e.target.value'suna esitliyorsun.
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.full_name === "" || form.phone_number === "") {
      return false;
    }

    console.log(form);
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="full_name"
          placeholder="Full name"
          onChange={onChangeInput}
        ></input>
      </div>
      <div>
        <input
          name="phone_number"
          placeholder="Phone number"
          onChange={onChangeInput}
        ></input>
      </div>
      <button>Add</button>
    </form>
  );
}

export default Form;
