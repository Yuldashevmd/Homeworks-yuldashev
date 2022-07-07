import React, { useContext, useState } from "react";
import { ContextWrap, url } from "../Context";
import Modal from "./modal";
import { Block, Container } from "./style";

const RestApi = () => {
  const [data, setData] = useContext(ContextWrap);
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };
  const onDelete = (id) => {
    fetch(
      `${url}/posts/${id}`,
      {
        method: "DELETE",
      },
      []
    )
      .then((res) => res.json())
      .then((res) =>
        res.statusCode === 200
          ? setData(data.filter((item) => item.id !== id))
          : null
      );
  };
  return (
    <Container>
      <Modal display={modal} />
      {data?.map((item) => (
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
      <h1>{data?.length}</h1>
    </Container>
  );
};
export default RestApi;
