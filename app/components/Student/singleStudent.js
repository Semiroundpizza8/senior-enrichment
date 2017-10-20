import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store.jsx';
import { putStudent } from '../../reducers';


class Main extends Component {
  constructor(props) {
    super(props)
    this.studentCell = this.studentCell.bind(this);
    this.campusTable = this.campusTable.bind(this);
  }

  componentDidMount() {
  }

  studentCell(student) {
    if (!student) return
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

  campusTable(campusId) {
    var students = this.props.students.filter(student => student.Campus.id === campusId)
    return (
      <table className="table">
        <thead className="thead-inverse">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Campus</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="container" ref={this.dragulaDecorator} title={campusId}>
          {students.map(student => this.studentCell(student))}
        </tbody>
      </table>
    )
  }

  render() {
    const currentStudent = this.props.students.filter(student => (student.id == +this.props.match.params.id))
    if(!currentStudent.length) return (<div/>) 
    return (
      <div className="middle">
        <div className="row">
          <h1 className="col-md-3 col-md-offset-4">Classmates at {currentStudent[0].Campus.name}</h1>
        </div>
        <div className="container">
          <div className="col-md-3 col-md-offset-1">
            <h1>{currentStudent[0].name}</h1>
            <h2>{currentStudent[0].email}</h2>
          </div>
          <div className="col-md-6">
            {this.campusTable(currentStudent[0].CampusId)}
          </div>
        </div>
      </div>
    )
  }
}

//----------------
//CONTAINER
//-------------------------

const mapStateToProps = ({ campuses, students }) => ({ campuses, students });
const mapDispatch = dispatch => ({
});

export default connect(mapStateToProps, mapDispatch)(Main)