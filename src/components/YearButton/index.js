import React, { Component } from "react";
import { Link } from "react-router-dom";
import './YearButton.css'

export default class YearButton extends Component {
  render() {
    return (
      <div className="year-btn-background">
        <ul className="ul">
          <li className="prev" onClick={() => this.props.changeYear(-1)}><span></span></li>
          <Link to={"/year/" + this.props.yearPicked} style={{ textDecoration: 'none' , color: 'green' }}>
            <p className="year">{this.props.yearPicked}</p>
          </Link>
          <li className="next" onClick={() => this.props.changeYear(1)}><span></span></li>
        </ul>
      </div>
    )
  }
}
