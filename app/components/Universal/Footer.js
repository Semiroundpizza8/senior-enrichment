import React, { Component } from 'react';

export default class Main extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
  }

  render() {
    return (
      <footer className="myFooter">
        <div className="container">
          <ul>
            <li><a href="#">Company Information</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Terms of service</a></li>
          </ul>
          <p className="footer-copyright">© 2016 Copyright Text</p>
        </div>
        {/* <div className="footer-social">
          <a href="#" className="social-icons"><i className="fa fa-facebook"></i></a>
          <a href="#" className="social-icons"><i className="fa fa-google-plus"></i></a>
          <a href="#" className="social-icons"><i className="fa fa-twitter"></i></a>
        </div> */}
</footer>
    )
  }
}