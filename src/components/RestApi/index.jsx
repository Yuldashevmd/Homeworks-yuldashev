import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Modal from "./modal";
import { Block, Container } from "./style";

export const url = "https://jsonplaceholder.typicode.com";
const RestApi = () => {
  const [posts, setPosts] = useState();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch(`${url}/posts?_limit=10`)
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  const openModal = () => {
    setModal(!modal);
  };
  const onDelete = (id) => {
    fetch(`${url}/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) =>
        res === 200 ? setPosts(posts.filter((item) => item.id !== id)) : null
      );
  };
  return (
    <Container>
      <Modal display={modal} />
      {posts?.map((item) => (
        <Block key={item?.id}>
          <h2>ID: {item?.id}</h2>
          <p>{item?.title}</p>
          <button onClick={() => onDelete(item.id)} className="delete">
            Delete posts
          </button>
        </Block>
      ))}
      <button className="add" onClick={openModal}>
        Add post
      </button>
      <h1>{posts?.length}</h1>
    </Container>
  );
};
export default RestApi;
