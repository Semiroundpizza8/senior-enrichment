import React, { Component } from 'react';

const Campuses = [
  {
    name: "Fullstack Academy",
    image: "http://fillmurray.com/300/300",
    id: 1
  },
  {
    name: "Halfstack Pancakery",
    image: "http://placecage.com/300/300",
    id: 2
  },
  {
    name: "School Academy",
    image: "http://www.placecage.com/g/300/300",
    id: 3
  },
  {
    name: "John holmes home for joans",
    image: "http://fillmurray.com/g/300/300",
    id: 4
  },
  {
    name: "Fullstack Academy",
    image: "http://fillmurray.com/300/300",
    id: 5
  },
  {
    name: "Halfstack Pancakery",
    image: "http://placecage.com/300/300",
    id: 6
  },
  {
    name: "School Academy",
    image: "http://www.placecage.com/g/300/300",
    id: 7
  },
  {
    name: "John holmes home for joans",
    image: "http://fillmurray.com/g/300/300",
    id: 8
  }
]


export default class Main extends Component {
  constructor() {
    super()
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
    return (
      <div className="container">
        <div className="row">
          {Campuses.map(campus => this.campusView(campus))}
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