import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import store from '../../store.jsx';
import { putStudent, deleteStudent } from '../../reducers';
import Dragula from 'react-dragula';

//----------------
//COMPONENT
//-------------------------
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drake: Dragula({})
    }
    this.studentCell = this.studentCell.bind(this);
    this.dragulaDecorator = this.dragulaDecorator.bind(this);
  }

  componentDidMount() {
    this.state.drake.on("drop", (el, target, source, sibiling) => {
      if(!source) { this.props.deleteStudent(el.title); }
      else { this.props.updateStudent(el.title, { CampusId: target.title }); }
    })
  }

  studentCell(student) {
    return (
      <tr key={student.id} title={student.id}>
        <th scope="row">{student.id}</th>
        <td>{student.name}</td>
        <td>{student.email}</td>
        <td>{student.Campus.name}</td>
      </tr>
    )
  }

  campusTable(campusId) {
    var students = this.props.students.filter(student => student.Campus.id === campusId)
    return (
      <div className="col-md-5 col-md-offset-1 well">
        <table className="table">
          <thead className="thead-inverse">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Campus</th>
            </tr>
          </thead>
          <tbody className='container' ref={this.dragulaDecorator} title={campusId}>
            {students.map(student => this.studentCell(student))}
          </tbody>
        </table>
      </div>
    )
  }

  render() {
    return (
      <div className="middle">
        <div className="row">
          <h1 className='col-md-offset-1'>Students</h1>
        </div>
        <div className="row container-fluid">
          {this.campusTable(1)}
          <div className='col-md-offset-2'>
          {this.campusTable(2)}
          </div>
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

const mapStateToProps = ({ students }) => ({ students });
const mapDispatch = dispatch => ({
  updateStudent: (id, update) => {
    dispatch(putStudent(id, update));
  }
});

export default connect(mapStateToProps, mapDispatch)(Main)