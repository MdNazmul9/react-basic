import React, { useState } from "react";

const AddUser = (props) => {
  const addUserHandeler = (event) => {
    event.preventDefault();
  };
  const usernameHandeler = () => {};
  const ageHandeler = () => {};

  return (
    <div>
      <form onSubmit={addUserHandeler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />

        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
