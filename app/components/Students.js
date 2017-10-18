import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from './store'
const students = [
  {
    name: "Benjamin Odisho",
    email: "Semiroundpizza8@gmail.com",
    id: 1,
    campus: "Fullstack Academy"
  },
  {
    name: "Corey Mertz",
    email: "Frosty@cupcakes.com",
    id: 2,
    campus: "Halfstacks Pancakery"
  },
  {
    name: "Lo Renzo",
    email: "Puppy@dog.net",
    id: 3,
    campus: "Waggers United"
  },
  {
    name: "Corey Mertz",
    email: "Frosty@cupcakes.com",
    id: 4,
    campus: "Halfstacks Pancakery"
  },
  {
    name: "Lo Renzo",
    email: "Puppy@dog.net",
    id: 5,
    campus: "Waggers United"
  },
  {
    name: "Benjamin Odisho",
    email: "Semiroundpizza8@gmail.com",
    id: 6,
    campus: "Fullstack Academy"
  },
  {
    name: "Corey Mertz",
    email: "Frosty@cupcakes.com",
    id: 7,
    campus: "Halfstacks Pancakery"
  },
  {
    name: "Lo Renzo",
    email: "Puppy@dog.net",
    id: 8,
    campus: "Waggers United"
  }
]

//----------------
//COMPONENT
//-------------------------
class Main extends Component {
  constructor(props) {
    super(props);
    this.studentCell = this.studentCell.bind(this);
  }

  componentDidMount() {
    console.log("DID MOUNT")
    console.log(store.getState())
  }

  studentCell(student) {
    return (
      <tr key={student.id}>
        <th scope="row">{student.id}</th>
        <td>{student.name}</td>
        <td>{student.email}</td>
        <td>{student.campus}</td>
      </tr>
    )
  }

  render() {
    return (
      <div className="middle">
        <div className="campusFrames">
          <div className="container">

            <table className="table">
              <thead className="thead-inverse">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Campus</th>
                </tr>
              </thead>
              <tbody>
                {students.map(student => this.studentCell(student))}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    )
  }
}

//----------------
//CONTAINER
//-------------------------

const mapStateToProps = null
const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(getStudents());
    // what other data might we want to fetch on app load?
  }
});

export default connect(mapStateToProps, mapDispatch)(Main)