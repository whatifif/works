import React from 'react';
import ReactDOM from 'react-dom';
import {renderIntoDocument} from 'react-addons-test-utils';
import { expect} from 'chai';
import Weather from './Weather';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import createStore from 'redux/create';
import ApiClient from 'helpers/ApiClient';
const client = new ApiClient();

describe('Weather Widget', () => {
  const mockStore = {
    weather: {
      saveWidget: () => {},
      saveWidgetDB: () => {},
      load: () => {},
      removeAll: () => {},
      id: 'default-uuid',
      title: 'Weather Widget Editor',
      showWind: true,
      units: 'metric',
      widgetSrc: null,
      widgetCode: null,
      widgetList: [

      ],
      loaded: false,
      editing: {},
      saveError: {}
    }
  };
  const store = createStore(browserHistory, client, mockStore);
  const renderer = renderIntoDocument(
    <Provider store={store} key="provider">
      <Weather/>
    </Provider>
  );
  const dom = ReactDOM.findDOMNode(renderer);

  it('should render a Weather page', () => {
    return expect(renderer).to.be.ok;
  });

  it('should render a title', () => {
    const text = dom.getElementsByTagName('h2')[0].textContent;
    expect(text).to.equal(mockStore.weather.title);
  });
  
  it('should render a Get Widget Code button', () => {
    const text = dom.getElementsByTagName('button')[0].textContent;
    expect(text).to.be.a('string');
  });

  it('should render a removeAll button', () => {
    const text = dom.getElementsByTagName('button')[1].textContent;
    expect(text).to.be.a('string');
  });

  it('should render a correct className', () => {
    const styles = require('containers/Weather/Weather.scss');
    expect(styles.App).to.be.a('string');
    expect(dom.className).to.include(styles.App);
  });
});
