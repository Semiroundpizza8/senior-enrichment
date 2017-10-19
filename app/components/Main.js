import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store.jsx';
import { getCampuses } from '../reducers';


class Main extends Component {
  constructor(props) {
    super(props)
    this.campusView = this.campusView.bind(this)
  }

  componentDidMount() {
  }

  campusView(campus) {
    return (
      <div className="col-md-4 col-sm-6 col-xs-12" key={campus.id}>
        <img src={campus.image}></img>
        <p>{campus.name}................................
          <i className="glyphicon glyphicon-folder-open"></i>
          <i className="glyphicon glyphicon-pencil"></i>
          <i className="glyphicon glyphicon-remove"></i>
        </p>
      </div>
    )
  }

  render() {
    console.log(this.props)
    return (
      <div className="container">
        <div className="row">
          {this.props.campuses.map(campus => this.campusView(campus))}
          <div className="col-md-4 col-sm-6 col-xs-12">
            <img src="http://www.placecage.com/gif/300/300"></img>
            <p> Create Campus...........................................
              <i className="glyphicon glyphicon-plus"></i>
            </p>
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
});

export default connect(mapStateToProps, mapDispatch)(Main)