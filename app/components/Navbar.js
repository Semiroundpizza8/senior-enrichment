import React, { Component } from 'react';

export default class Main extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="navbar navbar-default navbar-static-top">
        <div className="container">
          <a href="/" className="navbar-brand">Benjamin Odisho Senior Enrichment</a>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/students">Students</a>
            </li>
            <li>
              <a href="/">Campuses</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
