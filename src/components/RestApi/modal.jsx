import React, { useContext } from "react";
import { useState } from "react";
import { ContextWrap } from "../Context";
import { url } from "../Context";
import { ModalDiv } from "./style";

const Modal = ({ display }) => {
  const [value, setValue] = useState();
  const [post, setPost] = useContext(ContextWrap);

  const getValue = (e) => {
    setValue(e.target.value);
  };

  const sendValue = (e) => {
    e.preventDefault();

    fetch(`${url}/posts`, {
      method: "POST",
      body: JSON.stringify({ id: post.length + 1, title: value }),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => setPost([...post, res]));
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
