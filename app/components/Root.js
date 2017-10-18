import React, { Component } from 'react';
import Main from './Main.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Student from './Students.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // choose router type

export default class Root extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="Root">
        <Navbar />
        <Router>
          <div>
            <Route exact path='/' component={Main} />
            <Route path='/students' component={Student} />
          </div>
        </Router>
        <Footer />
      </div>
    )
  }
}

const mapPropsToState = null;
const mapDispatchToState = dispatch => {
  fetchInitialData: () => {
    dispatch(getStudents());
  }
}