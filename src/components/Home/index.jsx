import React from 'react';
import { useState } from 'react';
import { Button, Container, Input, Table } from './style';
import { dataM } from './mock-data';

const Home = () => {
  const [data,setData]=useState(dataM);
  const [edit,setEdit]=useState(false);
 

  const onDelete =(id)=>{
    setData(data.filter(value=>(
       value.id !== id
    )))
  };
  const onEdit =(id)=>{
   data.map(value=>{
      if(value.id === id) setEdit(!edit)
   }) 
  }

  return (
    <Container>
      <Table>
        <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>STATUS</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        </thead>
       {
        data.map(item=>{
          return(
            <tbody key={item.id}>
            <tr>
              <td>{item.id}</td>
              <td>{edit ? <Input type="text" defaultValue={item.name}/> :<Input dis type="text" defaultValue={item.name} disabled/>}</td>
              <td>{edit ? <Input type="text" defaultValue={item.status}/> :<Input dis type="text" defaultValue={item.status} disabled/>}</td>
              <td><Button onClick={()=>onEdit(item.id)}>{edit ? 'Save' :'Edit'}</Button></td>
              <td><Button red onClick={()=>onDelete(item.id)}>Delete</Button></td>
            </tr>
            </tbody>
          )
        })
       }
      </Table>
    </Container>
  );
};

export default Home;