import React, { useContext, useState } from "react";
import { ContextWrap, url } from "../Context";
import Modal from "./modal";
import { AddBtn, Block, Container } from "./style";

const RestApi = () => {
  const [data, setData] = useContext(ContextWrap);
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [inputVal, setInputVal] = useState();

  const openModal = () => {
    setModal(!modal);
  };
  const onDelete = (id) => {
    fetch(`${url}/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const onUpdate = () => {
    setEdit(!edit);
  };
  const onSave = (id) => {
    setEdit(false);
    fetch(`${url}/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: inputVal,
      }),
    })
      .then((res) => res.json())
      .then((res) => setData(data.filter((item) => item.id === id)));
  };
  const onChange = ({ target }) => {
    setInputVal({
      ...inputVal,
      [target.name]: target.value,
    });
  };
  return (
    <>
      <Container>
        <Modal display={modal} />
        {data?.map((item) => (
          <Block key={item?.id}>
            <h2>ID: {item?.id}</h2>
            {edit ? (
              <input
                defaultValue={item?.title}
                onChange={onChange}
                name={item?.id}
              />
            ) : (
              <input defaultValue={item?.title} disabled />
            )}
            <button onClick={() => onDelete(item.id)} className="delete">
              Delete posts
            </button>
            <button onClick={() => onUpdate(item.id)} className="edit">
              Edit posts
            </button>
            <button onClick={() => onSave(item.id)} className="save">
              Save posts
            </button>
          </Block>
        ))}
      </Container>
      <AddBtn onClick={openModal}>Add post</AddBtn>
      <h1>{data?.length}</h1>
    </>
  );
};
export default RestApi;
