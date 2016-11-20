import React, { Component, PropTypes } from 'react';
// import logo from './logo.svg';
import './Weather.scss';
import config from './config';
// import config from '../../config';
import {connect} from 'react-redux';
import * as weatherActions from 'redux/modules/weather';
import uuid from 'uuid';

@connect(
  state => ({
    id: state.weather.id,
    title: state.weather.title,
    showWind: state.weather.showWind,
    units: state.weather.units,
    widgetSrc: state.weather.widgetSrc,
    widgetCode: state.weather.widgetCode,
    widgetList: state.weather.widgetList
  }),
  {...weatherActions}
  )
class Weather extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    showWind: PropTypes.bool,
    units: PropTypes.string,
    widgetSrc: PropTypes.string,
    widgetCode: PropTypes.string,
    widgetList: PropTypes.array,
    saveWidget: PropTypes.func
  }
  constructor(props) {
    super(props);
    // this.state = { title: null, showWind: null, units: null, widgetSrc: null, widgetCode: null};
    // this.state = {
    //   title: props.title,
    //   showWind: props.showWind,
    //   units: props.units,
    //   widgetSrc: props.widgetSrc,
    //   widgetCode: props.widgetCode,
    //   widgetList: [
    //     {title: 'a title', widgetCode: 'a widgetcode'},
    //     {title: 'b title', widgetCode: 'b widgetcode'},
    //     {title: 'c title', widgetCode: 'c widgetcode'},
    //     {title: 'd title', widgetCode: 'd widgetcode'},
    //   ]
    // };
    this.state = {
      id: props.id,
      title: props.title,
      showWind: props.showWind,
      units: props.units,
      widgetSrc: props.widgetSrc,
      widgetCode: props.widgetCode,
      widgetList: props.widgetList
    };
  }
  submit = (event) => {
    event.preventDefault();
    const id = uuid();
    const title = this.refs.inputTitle.value || 'Weather Widget';
    const showWind = String(this.refs.inputShowWind.checked) || 'false';
    const units = this.refs.inputUnits.value || 'metric';
    const widgetSrc = `http://${config.host}:${config.port}/weather-widget?title=${encodeURI(title)}&showWind=${showWind}&units=${units}`;
    const widgetCode = `<iframe src="${widgetSrc}" width="100%" height="300px" scrolling="yes" marginWidth="0" marginHeight="0" frameBorder="0" vspace="0" hspace="0"></iframe>`;
    const newWidget = {id, title, showWind, units, widgetSrc, widgetCode};
    this.setState({id, title, showWind, units, widgetSrc, widgetCode, widgetList: [...this.state.widgetList, newWidget]});
    this.props.saveWidget(newWidget);
  }
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="App-header">
            <h2>Weather Widget Editor</h2>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <h3>Create Widget</h3>
            <form className="form-horizontal" onSubmit={this.submit}>
              <div className="form-group">
                <label htmlFor="inputTitle" className="col-sm-2 control-label">Title</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="inputTitle" ref="inputTitle" defaultValue={this.state.title} placeholder="title" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputUnits" className="col-sm-2 control-label">Units</label>
                <div className="col-sm-10">
                  <select className="form-control" id="inputUnits" ref="inputUnits" defaultValue={this.state.units}>
                    <option value="metric">metric</option>
                    <option value="imperial">imperial</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" id="inputShowWind" ref="inputShowWind" defaultChecked={this.state.showWind}/> Show Wind
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-primary btn-lg">Get Widget Code</button>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputCode" className="col-sm-2 control-label">Widget Code</label>
                <textarea rows="10"className="col-sm-10" id="inputCode" ref="inputCode" value={this.state.widgetCode}>
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
          <div className="col-md-4">
            <h3>List of Widgets Created</h3>
            {this.state.widgetList && this.state.widgetList.map((item, index) =>
              <div className="well" key={index}>
                <div>id: {item.id}</div>
                <div>title: {item.title}</div>
                <div>code:<br/> {item.widgetCode}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
