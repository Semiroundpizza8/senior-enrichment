import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store.jsx';
import { getCampuses, deleteCampus, postCampus } from '../../reducers';


class Main extends Component {
  constructor(props) {
    super(props)
    this.campusView = this.campusView.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addCampusForm = this.addCampusForm.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
  }

  handleClick(campus) {
    this.props.removeCampus(campus.id);
  }

  campusView(campus) {
    return (
      <div className="col-md-4 col-sm-6 col-xs-12" key={campus.id}>
        <img src={campus.image}></img>
        <h4>
          {campus.name}
        </h4>
        <p>
          <a href={`/campuses/${campus.id}`} className="glyphicon glyphicon-folder-open btn"></a>
          <i className="glyphicon glyphicon-remove btn" onClick={() => this.handleClick(campus)}></i>
        </p>
      </div>
    )
  }

  submitHandler(event) {
    event.preventDefault()
    let campus = {
      name: event.target.name.value,
      image: event.target.pic.value
    }
    this.props.addCampus(campus);
  }

  addCampusForm() {
    return (
      <div className="col-md-3">
      <h1>Add New Campus</h1>
      <form onSubmit={this.submitHandler} id="addCampusForm">
        <input type="text" name="name"></input>
        <input type="text" name="pic"></input>
        <input type="submit"></input>
      </form>
    </div>
    )
  }

  render() {
    console.log(this.props)
    return (
      <div className="middle container">
        <div className="row">
          {this.props.campuses.map(campus => this.campusView(campus))}
          <div className="col-md-4 col-sm-6 col-xs-12">
            {this.addCampusForm()}
          </div>
        </div>
      </div>
    )
  }
}

//----------------
//CONTAINER
//-------------------------

const mapStateToProps = ({ campuses }) => ({ campuses });
const mapDispatch = dispatch => ({
  removeCampus: (id) => {
    dispatch(deleteCampus(id));
  },
  addCampus: (campus) => {
    dispatch(postCampus(campus));
  }
});

export default connect(mapStateToProps, mapDispatch)(Main)