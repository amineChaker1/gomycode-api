import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" /> <br />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
