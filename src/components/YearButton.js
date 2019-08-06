import React, { Component } from "react";

import '../css/YearButton.css'

export default class YearButton extends Component {
  render(){
    return(
      <div className="year-btn-background">
        <ul className="ul">
          <li className="prev" onClick={(param)=>this.props.changeYear(-1)}><span></span></li>
          <p className="year">{this.props.yearPicked}</p>
          <li className="next" onClick={(param)=>this.props.changeYear(1)}><span></span></li>
        </ul>
      </div>
    )
  }
}
