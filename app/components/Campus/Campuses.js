import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store.jsx';
import { getCampuses, postCampus, putCampus, deleteCampus } from '../../reducers';

//----------------
//COMPONENT
//-------------------------
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.campusCell = this.campusCell.bind(this);
    this.addSubmitHandler = this.addSubmitHandler.bind(this);
    this.updateSubmitHandler = this.updateSubmitHandler.bind(this);
    this.addCampusForm = this.addCampusForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
  }


  addSubmitHandler(event) {
    event.preventDefault()
    console.log("Name", event.target.name.value)
    console.log("Image", event.target.image.value)
    let campus = {
      name: event.target.name.value,
      image: event.target.image.value,
    }
    console.log("Campus", campus)
    this.props.addCampus(campus);
  }

  
  addCampusForm() {
    return (
      <div className="col-md-3 well">
        <h1>Add New Campus</h1>
        <form onSubmit={this.addSubmitHandler} id="addCampusForm">
          <input type="text" name="name"></input>
          <input type="text" name="image"></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }

  updateSubmitHandler(event) {
    event.preventDefault()
    var campus = {
      image: event.target.image.value,
    }
    this.props.updateCampus(event.target.campus.value, campus);
  }


  updateCampusForm() {
    if(!this.props.campuses.length) return ( <div/> )    
    return (
      <div className="col-md-3 well">
        <h1>Update Campus</h1>
        <form onSubmit={this.updateSubmitHandler} id="updateCampusForm">
          <select name="campus" form="updateCampusForm">
            {this.props.campuses.map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)}
          </select>
          <input type="text" name="image"></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }

  handleDelete(id) {
    this.props.removeCampus(id);
  }

  campusCell(campus) {
    return (
      <tr key={campus.id}>
        <th scope="row"><img src={campus.image}></img></th>
        <td><a href={`/campuses/${campus.id}`}>{campus.name}</a></td>
        <td>{this.props.students.filter(ele => ele.CampusId === campus.id).length}</td>
        <td>
          <a type="button" className="btn btn-default" onClick={() => { this.handleDelete(campus.id) }}>
            <i className="glyphicon glyphicon-remove"></i>
          </a>
        </td>
      </tr>
    )
  }

  render() {
    if(!this.props.campuses.length) return ( <div/> )
    return (
      <div className="middle">
        <div className="container">
          <div className="row">
            <h1 className='col-md-offset-1'>Campuses</h1>
          </div>
          <div className="campusFrames col-md-9">
            <table className="table">
              <thead className="thead-inverse">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Size of Student Body</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.props.campuses.map(campus => this.campusCell(campus))}
              </tbody>
            </table>
          </div>
          {this.addCampusForm()}
          {this.updateCampusForm()}
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
  addCampus: campus => {
    dispatch(postCampus(campus));
  },
  updateCampus: (id, Campus) => {
    dispatch(putCampus(id, Campus));
  },
  removeCampus: (id) => {
    dispatch(deleteCampus(id));
  }
});

export default connect(mapStateToProps, mapDispatch)(Main)