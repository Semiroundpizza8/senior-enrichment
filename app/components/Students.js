import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store.jsx';
import { getStudents } from '../reducers';

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
    console.log(store)
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
    console.log("IN REND", store.getState())
    console.log("ALSO IN REND", this.props)
    return (
      <div className="middle">
        <div className="container">
          <div className="row">
            <h1 className='col-md-offset-1'>Students</h1>
          </div>
          <div className="campusFrames">
            <table className="table col-md-10">
              <thead className="thead-inverse">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Campus</th>
                </tr>
              </thead>
              <tbody>
                {this.props.students.map(student => this.studentCell(student))}
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

const mapStateToProps = ({ students }) => ({ students });
const mapDispatch = dispatch => ({
});

export default connect(mapStateToProps, mapDispatch)(Main)