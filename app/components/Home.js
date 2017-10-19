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

  render() {
    console.log(this.props)
    return (
      <div className="container">
        <h1> HOME </h1>
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