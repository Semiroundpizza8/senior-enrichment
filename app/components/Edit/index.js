import React, { Component } from "react";
import ReactDOM from "react-dom"
import { connect } from "react-redux";
import store from "../../store.jsx";
import { postStudent, putStudent, deleteStudent } from "../../reducers";
import Dragula from "react-dragula";

//----------------
//COMPONENT
//-------------------------
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drake: Dragula({}),
      leftTableId: 1,
      rightTableId: 2,
    }
    this.studentCell = this.studentCell.bind(this);
    this.dragulaDecorator = this.dragulaDecorator.bind(this);
    this.addStudentRow = this.addStudentRow.bind(this);
    this.handleSelectLeft = this.handleSelectLeft.bind(this);
    this.handleSelectRight = this.handleSelectRight.bind(this);
    this.addStudentSubmit = this.addStudentSubmit.bind(this);
  }

  componentDidMount() {
    this.state.drake.on("drop", (el, target, source, sibiling) => {
      this.props.updateStudent(el.title, { CampusId: target.title });
    })
  }

  handleDelete(id) {
    store.dispatch(deleteStudent(id));
  }

  studentCell(student) {
    if(!student) return
    return (
      <tr key={student.id} title={student.id}>
        <th scope="row">{student.name}</th>
        <td>{student.email}</td>
        <td>{student.Campus.name}</td>
        <td>
          <a type="button" className="btn btn-default" onClick={() => { this.handleDelete(student.id) }}>
            <i className="glyphicon glyphicon-remove"></i>
          </a>
        </td>
      </tr>
    )
  }

  addStudentSubmit(event) {
    event.preventDefault();
    dispatch(postStudent({
      name: event.target.name,
      email: event.target.email,
      CampusId: +event.target.title
    }));
  }

  addStudentRow(campusId) {
    return (
      <form id="addStudentForm" title={campusId} onSubmit={this.addStudentSubmit}>
        <input type="text" name="name"></input>
        <input type="text" name="email"></input>
        <input type="submit"></input>
      </form>
    )
  }

  campusTable(campusId) {
    var students = this.props.students.filter(student => student.Campus.id === campusId)
    return (
      <div className="col-md-6 well">
        <table className="table">
          <thead className="thead-inverse">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Original Campus</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="container" ref={this.dragulaDecorator} title={campusId}>
            {students.map(student => this.studentCell(student))}
          </tbody>
        </table>
        {this.addStudentRow(campusId)}
      </div>
    )
  }

  handleSelectLeft(event) {
    this.setState({ leftTableId: +event.target.value })
  }

  handleSelectRight(event) {
    this.setState({ rightTableId: +event.target.value })
  }

  render() {
    return (
      <div className="middle">
        <div className="row">
          <h1 className="col-md-3 col-md-offset-1">Students</h1>
          <select onChange={this.handleSelectLeft} className="custom-select">
            {this.props.campuses.map(campus => <option value={campus.id}>{campus.name}</option>)}
          </select>
          <select onChange={this.handleSelectRight}>
            {this.props.campuses.map(campus => <option value={campus.id}>{campus.name}</option>)}
          </select>
        </div>
        <div className="row container-fluid">
          {this.campusTable(this.state.leftTableId)}
          {this.campusTable(this.state.rightTableId)}
        </div>
      </div>
    )
  }

  dragulaDecorator(componentBackingInstance) {
    if (componentBackingInstance) {
      let options = {};
      this.state.drake.containers.push(componentBackingInstance);
    }
  }
}

//----------------
//CONTAINER
//-------------------------

const mapStateToProps = ({ students, campuses }) => ({ students, campuses });
const mapDispatch = dispatch => ({
  updateStudent: (id, update) => {
    dispatch(putStudent(id, update));
  },
  deleteStudent: (id) => {
    dispatch(deleteStudent(id));
  },
  addStudent: (student) => {
    dispatch(postStudent(student));
  }
});

export default connect(mapStateToProps, mapDispatch)(Edit)