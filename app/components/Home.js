import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store.jsx';
import { getCampuses } from '../reducers';


class Main extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className='topBody container'>
          <div className='row'>
            <div className='col-sm-6 well well-lg'>
              <h2>Sort Your Campi</h2>
              <p className='lead'>Untangle your campus databases with ease using this simple bootcamp project.</p>
              <a href="/students"><button type='button' className='btn btn-lg btn-default'>Head to Students</button></a>
              <a href="/campuses"><button type='button' className='btn btn-lg btn-primary'>Head to Campuses</button></a>
            </div>
            <div className='col-sm-6 hidden-sm hidden-xs'>
              <img src='https://www.fillmurray.com/500/300' />
            </div>
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