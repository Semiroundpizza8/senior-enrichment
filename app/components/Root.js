import React, { Component } from 'react';
import Campuses from './Main.js';
import Home from './Home.js';
import Navbar from './Navbar.js';
import Edit from './Edit';
import Footer from './Footer.js';
import Students from './Students.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // choose router type
import store from '../store'
import { connect } from 'react-redux';
import { getStudents, getCampuses } from '../reducers';

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
            <Route path='/campuses' component={Campuses} />
            <Route path='/students' component={Students} />
            <Route path='/edit' component={Edit} />
            {/* <Route path='/students/:id' component={SingleStudent} />
            <Route path='/campuses/:id' component={SingleCampus} /> */}
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