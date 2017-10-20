import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // choose router type
import { connect } from 'react-redux';

import store from '../store'
import { getStudents, getCampuses } from '../reducers';

import Home from './Home.js';
import Navbar from './Universal/Navbar.js';
import Footer from './Universal/Footer.js';
import Campuses from './Campus/Campuses.js';
import Students from './Student/Students.js';
import SingleCampus from './Campus/singleCampus.js';
import SingleStudent from './Student/singleStudent.js';
import Edit from './Edit';

class Root extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchInitialData();
    console.log("PROPS", this.props)
  }

  render() {
    return (
      <div className="Root">
        <Navbar />
        <Router>
          <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/campuses' component={Campuses} />
            <Route exact path='/students' component={Students} />
            <Route path='/edit' component={Edit} />
            <Route path='/students/:id' component={SingleStudent} />
            <Route path='/campuses/:id' component={SingleCampus} />
          </div>
        </Router>
        <Footer />
      </div>
    )
  }
}

const mapState = null;
const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(getStudents());
    dispatch(getCampuses());
  }
});

export default connect(mapState, mapDispatch)(Root)