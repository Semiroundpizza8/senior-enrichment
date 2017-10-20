import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store.jsx';
import { getStudents, postStudent, putStudent, deleteStudent } from '../../reducers';

//----------------
//COMPONENT
//-------------------------
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.studentCell = this.studentCell.bind(this);
    this.addSubmitHandler = this.addSubmitHandler.bind(this);
    this.updateSubmitHandler = this.updateSubmitHandler.bind(this);
    this.addStudentForm = this.addStudentForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
  }

  handleDelete(id) {
    store.dispatch(this.props.removeStudent(id));
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

  addSubmitHandler(event) {
    event.preventDefault()
    let student = {
      name: event.target.name.value,
      email: event.target.email.value,
      CampusId: +event.target.campus.value
    }
    this.props.addStudent(student);
  }

  
  addStudentForm() {
    return (
      <div className="col-md-3 well">
        <h1>Add New Student</h1>
        <form onSubmit={this.addSubmitHandler} id="addStudentForm">
          <input type="text" name="name"></input>
          <input type="text" name="email"></input>
          <select name="campus" form="addStudentForm">
            {this.props.campuses.map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)}
          </select>
          <input type="submit"></input>
        </form>
      </div>
    )
  }

  updateSubmitHandler(event) {
    event.preventDefault()
    var student = {
      email: event.target.email.value,
      CampusId: event.target.campus.value
    }
    this.props.updateStudent(event.target.student.value, student);
  }


  updateStudentForm() {
    return (
      <div className="col-md-3 well">
        <h1>Update Student</h1>
        <form onSubmit={this.updateSubmitHandler} id="updateStudentForm">
          <select name="student" form="updateStudentForm">
            {this.props.students.map(student => <option value={student.id}>{student.name}</option>)}
          </select>
          <input type="text" name="email"></input>
          <select name="campus" form="updateStudentForm">
            {this.props.campuses.map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)}
          </select>
          <input type="submit"></input>
        </form>
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
          {this.updateStudentForm()}
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
  },
  updateStudent: (id, student) => {
    dispatch(putStudent(id, student));
  },
  removeStudent: (id) => {
    dispatch(deleteStudent(id));
  }
});

export default connect(mapStateToProps, mapDispatch)(Main)