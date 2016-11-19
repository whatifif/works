import React, { Component } from 'react';
// import logo from './logo.svg';
import './Weather.scss';
import config from './config';
// import config from '../../config';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = { title: null, showWind: null, units: null, widgetSrc: null, widgetCode: null};
  }
  submit = (event) => {
    event.preventDefault();
    const title = encodeURI(this.refs.inputTitle.value || 'Weather Widget');
    const showWind = String(this.refs.inputShowWind.checked) || 'false';
    const units = this.refs.inputUnits.value || 'metric';
    const widgetSrc = `http://${config.host}:${config.port}/weather-widget?title=${title}&showWind=${showWind}&units=${units}`;
    const widgetCode = `<iframe src="${widgetSrc}" width="100%" height="300px" scrolling="yes" marginWidth="0" marginHeight="0" frameBorder="0" vspace="0" hspace="0"></iframe>`;
    this.setState({title, showWind, units, widgetSrc, widgetCode});
    console.log('config', config);
  }
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="App-header">
            <h2>Weather Widget Editor</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <form className="form-horizontal" onSubmit={this.submit}>
              <div className="form-group">
                <label htmlFor="inputTitle" className="col-sm-2 control-label">Title</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="inputTitle" ref="inputTitle" placeholder="title" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputUnits" className="col-sm-2 control-label">Units</label>
                <div className="col-sm-10">
                  <select className="form-control" id="inputUnits" ref="inputUnits">
                    <option value="metric">metric</option>
                    <option value="imperial">imperial</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" id="inputShowWind" ref="inputShowWind"/> Show Wind
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default">Get Widget Code</button>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputCode" className="col-sm-2 control-label">Widget Code</label>
                <textarea rows="7"className="col-sm-10" id="inputCode" ref="inputCode" value={this.state.widgetCode}>
                </textarea>
              </div>
              <div className="form-group">
                <label htmlFor="" className="col-sm-2 control-label"></label>
                <p>Copy and paste the above code to your site</p>
              </div>
            </form>
          </div>
          <div className="col-md-4">
            <h3>Live Demo of Widget</h3>
            <iframe src={this.state.widgetSrc} width="100%" height="300px" scrolling="yes" marginWidth="0" marginHeight="0" frameBorder="1" vspace="0" hspace="0"></iframe>`
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default Weather;
