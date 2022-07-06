import React from "react";
import { useState } from "react";
import { url } from "./index";
import { ModalDiv } from "./style";

const Modal = ({ display }) => {
  const [value, setValue] = useState();

  const getValue = (e) => {
    setValue(e.target.value);
  };
  const sendValue = (e) => {
    e.preventDefault();

    fetch(`${url}/posts`, {
      method: "POST",
      body: JSON.stringify({ title: value }),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <ModalDiv display={display}>
      <form onSubmit={sendValue}>
        <p>X</p>
        <div>
          <label htmlFor="title">Title</label>
          <input onChange={getValue} type="text" name="title" />
        </div>
        <div>
          <button type="submit">Post</button>
        </div>
      </form>
    </ModalDiv>
  );
};

export default Modal;
