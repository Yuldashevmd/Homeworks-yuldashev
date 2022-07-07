import React from "react";
import "./table.css";
import { Container, Table } from "reactstrap";

class TableItem extends React.Component {
  constructor() {
    super();
    this.state = {
      person: [
        {
          id: 1,
          name: "Sardorbek Muhtorov",
          age: 26,
          adress: "Namangan,Uzbekistan",
          status: "Student",
          nickname: "Ali",
          univ: "sejong",
          job: "developer",
        },
        {
          id: 2,
          name: "Sardorbek Muhtorov",
          age: 26,
          adress: "Namangan,Uzbekistan",
          status: "Student",
          nickname: "Ali",
          univ: "sejong",
          job: "developer",
        },
        {
          id: 3,
          name: "Sardorbek Muhtorov",
          age: 26,
          adress: "Namangan,Uzbekistan",
          status: "Student",
          nickname: "Ali",
          univ: "sejong",
          job: "developer",
        },
        {
          id: 4,
          name: "Sardorbek Muhtorov",
          age: 26,
          adress: "Namangan,Uzbekistan",
          status: "Student",
          nickname: "Ali",
          univ: "sejong",
          job: "developer",
        },
        {
          id: 5,
          name: "Sardorbek Muhtorov",
          age: 26,
          adress: "Namangan,Uzbekistan",
          status: "Student",
          nickname: "Ali",
          univ: "sejong",
          job: "developer",
        },
        {
          id: 6,
          name: "Sardorbek Muhtorov",
          age: 26,
          adress: "Namangan,Uzbekistan",
          status: "Student",
          nickname: "Ali",
          univ: "sejong",
          job: "developer",
        },
        {
          id: 7,
          name: "Sardorbek Muhtorov",
          age: 26,
          adress: "Namangan,Uzbekistan",
          status: "Student",
          nickname: "Ali",
          univ: "sejong",
          job: "developer",
        },
        {
          id: 8,
          name: "Sardorbek Muhtorov",
          age: 26,
          adress: "Namangan,Uzbekistan",
          status: "Student",
          nickname: "Ali",
          univ: "sejong",
          job: "developer",
        },
        {
          id: 9,
          name: "Sardorbek Muhtorov",
          age: 26,
          adress: "Namangan,Uzbekistan",
          status: "Student",
          nickname: "Ali",
          univ: "sejong",
          job: "developer",
        },
        {
          id: 10,
          name: "Sardorbek Muhtorov",
          age: 26,
          adress: "Namangan,Uzbekistan",
          status: "Student",
          nickname: "Ali",
          univ: "sejong",
          job: "developer",
        },
        {
          id: 11,
          name: "Sardorbek Muhtorov",
          age: 26,
          adress: "Namangan,Uzbekistan",
          status: "Student",
          nickname: "Ali",
          univ: "sejong",
          job: "developer",
        },
        {
          id: 12,
          name: "Sardorbek Muhtorov",
          age: 26,
          adress: "Namangan,Uzbekistan",
          status: "Student",
          nickname: "Ali",
          univ: "sejong",
          job: "developer",
        },
        {
          id: 13,
          name: "Sardorbek Muhtorov",
          age: 26,
          adress: "Namangan,Uzbekistan",
          status: "Student",
          nickname: "Ali",
          univ: "sejong",
          job: "developer",
        },
        {
          id: 14,
          name: "Sardorbek Muhtorov",
          age: 26,
          adress: "Namangan,Uzbekistan",
          status: "Student",
          nickname: "Ali",
          univ: "sejong",
          job: "developer",
        },
        {
          id: 15,
          name: "Sardorbek Muhtorov",
          age: 26,
          adress: "Namangan,Uzbekistan",
          status: "Student",
          nickname: "Ali",
          univ: "sejong",
          job: "developer",
        },
        {
          id: 16,
          name: "Sardorbek Muhtorov",
          age: 26,
          adress: "Namangan,Uzbekistan",
          status: "Student",
          nickname: "Ali",
          univ: "sejong",
          job: "developer",
        },
        {
          id: 17,
          name: "Sardorbek Muhtorov",
          age: 26,
          adress: "Namangan,Uzbekistan",
          status: "Student",
          nickname: "Ali",
          univ: "sejong",
          job: "developer",
        },
      ],
    };
  }
  render() {
    const onDelete = (id) => {
      this.setState({
        person: this.state.person.filter((value) => {
          return value.id !== id;
        }),
      });
    };
    return (
      <div className="TableMain">
        <Container className="container">
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>ADDRESS</th>
                <th>STATUS</th>
                <th>UNIV</th>
                <th>JOB</th>
                <th>REMOVE</th>
              </tr>
            </thead>
            <tbody>
              {this.state.person.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.adress}</td>
                    <td>{item.status}</td>
                    <td>{item.univ}</td>
                    <td>{item.job}</td>
                    <button className="btn" onClick={() => onDelete(item.id)}>
                      Delete
                    </button>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default TableItem;
