import React, { Component } from 'react';
import TransformDate from "./TransformDate";

class DisplayWeatherCard extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    return (
      <div className='card m-3' style={{ width: '18rem'}}>
        <img src={this.props.icon} className="card-img-top" alt={this.props.IconPhrase} />
        <div className="card-body">
          <h3>Le {TransformDate(this.props.date)}</h3>
          <h3>{this.props.IconPhrase}</h3>
          <div className="row">
            <div className="col">
              <p>T min : {this.props.MinTemp}°C</p>
              <p>T max : {this.props.MaxTemp}°C</p>
            </div>
            <div className="col">
              <p>RealFeel min : {this.props.FeelMinTemp}°C</p>
              <p>RealFeel max : {this.props.FeelMaxTemp}°C</p>
            </div>
            <div className="col">
              <p>Vent : {this.props.Wind} km/h</p>
              <p>Rafales : {this.props.WindGust} km/h</p>
              <p>Précipitations : {this.props.Liquid} mm</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default DisplayWeatherCard
