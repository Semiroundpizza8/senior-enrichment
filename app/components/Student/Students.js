import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store.jsx';
import { getStudents, postStudent } from '../../reducers';

//----------------
//COMPONENT
//-------------------------
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.studentCell = this.studentCell.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.addStudentForm = this.addStudentForm.bind(this);
  }

  componentDidMount() {
  }

  studentCell(student) {
    if (!student.Campus) return <div />
    return (
      <tr key={student.id}>
        <th scope="row"><a href={`/students/${student.id}`}>{student.name}</a></th>
        <td>{student.email}</td>
        <td><a href={`/campuses/${student.Campus.id}`}>{student.Campus.name}</a></td>
        <td>
          <a type="button" className="btn btn-default" onClick={() => { this.handleDelete(student.id) }}>
            <i className="glyphicon glyphicon-remove"></i>
          </a>
        </td>
      </tr>
    )
  }

  submitHandler(event) {
    event.preventDefault()
    let student = {
      name: event.target.name.value,
      email: event.target.email.value,
      CampusId: +event.target.campus.value
    }
    console.log("HANDLER", student)
    this.props.addStudent(student);
  }

  addStudentForm() {
    return (
      <div className="col-md-3 well">
        <h1>Add New Student</h1>
        <form onSubmit={this.submitHandler} id="addStudentForm">
          <input type="text" name="name"></input>
          <input type="text" name="email"></input>
          <select onChange={this.handleSelect} name="campus" form="addStudentForm">
            {this.props.campuses.map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)}
          </select>
          <input type="submit"></input>
        </form>
        <a type="button" className="btn btn-default" onClick={() => { this.switchToEdit(student.id) }}>
            <i className="glyphicon glyphicon-pencil"></i>
          </a>
      </div>
    )
  }

  render() {
    return (
      <div className="middle">
        <div className="container">
          <div className="row">
            <h1 className='col-md-offset-1'>Students</h1>
          </div>
          <div className="campusFrames col-md-9">
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
                {this.props.students.map(student => this.studentCell(student))}
              </tbody>
            </table>
          </div>
          {this.addStudentForm()}
        </div>
      </div>
    )
  }
}

//----------------
//CONTAINER
//-------------------------

const mapStateToProps = ({ students, campuses }) => ({ students, campuses });
const mapDispatch = dispatch => ({
  addStudent: student => {
    dispatch(postStudent(student));
  }
});

export default connect(mapStateToProps, mapDispatch)(Main)