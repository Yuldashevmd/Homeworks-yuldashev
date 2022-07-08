import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
export const Block = styled.div`
  width: 400px;
  height: 250px;
  margin: 0.5rem 0;
  background: gainsboro;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 8px 10px;
  text-align: center;
  h2 {
    font-size: 24px;
    font-weight: bold;
  }
  button {
    width: 150px;
    height: 40px;
    background: transparent;
    color: #fff;
    border: 2px solid transparent;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s linear;
  }
  .edit {
    background: slategrey;
  }
  .delete {
    background: firebrick;
  }
  .save {
    background: forestgreen;
  }
`;
export const ModalDiv = styled.div`
  display: ${(props) => (props.display ? "block" : "none")};
  text-align: center;
  animation: show 0.3s backwards;
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  form {
    width: 500px;
    height: 400px;
    padding: 20px;
    background: beige;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    box-shadow: 0 0 10px -2px grey;
    border-radius: 8px;
    p {
      width: 50px;
      position: absolute;
      top: 0.5rem;
      right: 1rem;
      border: 1px solid grey;
      border-radius: 40px;
      cursor: pointer;
      transition: all 0.2s linear;
      :hover {
        background: red;
        color: #fff;
      }
    }
    div {
      display: flex;
      flex-direction: column;
      label {
        font-size: 26px;
        letter-spacing: 2px;
      }
      input {
        width: 80%;
        padding: 5px 10px;
        margin: 2rem auto;
        outline: none;
        border: 1px solid lightgray;
        :focus {
          border: 1px solid skyblue;
        }
      }
      button {
        width: 80%;
        margin: auto;
        padding: 5px 0;
        background: lightgreen;
        color: #000;
        text-transform: uppercase;
        :active {
          transform: scale(0.98);
        }
      }
    }
  }
`;
export const AddBtn = styled.button`
  width: 200px;
  margin: auto;
  display: flex;
  justify-content: center;
  height: fit-content;
  background: #3185f3;
  color: #fff;
  text-transform: uppercase;
  border: 2px solid #3185f3;
  padding: 5px 0;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s linear;
  :hover {
    background: transparent;
    color: #3185f3;
  }
`;
