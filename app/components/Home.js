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
      <div className="container">
        <h1> HOME </h1>
        <p> This is the home. It should have content, but it doesnt. I know, you'd've thought he would've STARTED here but nope. My developer suuuuucks.</p>
        <div className="row">
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