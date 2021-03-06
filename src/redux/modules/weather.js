const LOAD = 'redux-example/weather/LOAD';
const LOAD_SUCCESS = 'redux-example/weather/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/weather/LOAD_FAIL';
const EDIT_START = 'redux-example/weather/EDIT_START';
const EDIT_STOP = 'redux-example/weather/EDIT_STOP';
const SAVE = 'redux-example/weather/SAVE';
const SAVE_SUCCESS = 'redux-example/weather/SAVE_SUCCESS';
const SAVE_FAIL = 'redux-example/weather/SAVE_FAIL';
const SAVE_WIDGET = 'redux-example/weather/SAVE_WIDGET';
const SAVE_WIDGET_DB = 'redux-example/weather/SAVE_WIDGET_DB';
const SAVE_WIDGET_DB_SUCCESS = 'redux-example/weather/SAVE_WIDGET_DB_SUCCESS';
const SAVE_WIDGET_DB_FAIL = 'redux-example/weather/SAVE_WIDGET_DB_FAIL';
const REMOVE_ALL = 'redux-example/weather/REMOVE_ALL';
const REMOVE_ALL_SUCCESS = 'redux-example/weather/REMOVE_ALL_SUCCESS';
const REMOVE_ALL_FAIL = 'redux-example/weather/REMOVE_ALL_FAIL';
// const initialState = {
//   loaded: false,
//   editing: {},
//   saveError: {}
// };

// const initialState = {
//   title: 'Widget Title',
//   showWind: true,
//   units: 'metric',
//   widgetSrc: null,
//   widgetCode: null,
//   widgetList: [
//     {title: 'a2 title', widgetCode: 'a2 widgetcode'},
//     {title: 'b2 title', widgetCode: 'b2 widgetcode'},
//     {title: 'c2 title', widgetCode: 'c2 widgetcode'},
//     {title: 'd2 title', widgetCode: 'd2 widgetcode'},
//   ],
//   loaded: false,
//   editing: {},
//   saveError: {}
// };
const initialState = {
  id: 'default-uuid',
  title: 'Widget Title',
  showWind: true,
  units: 'metric',
  widgetSrc: null,
  widgetCode: null,
  widgetList: [

  ],
  loaded: false,
  editing: {},
  saveError: {}
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        widgetList: action.result.widgets,
        error: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error
      };
    case EDIT_START:
      return {
        ...state,
        editing: {
          ...state.editing,
          [action.id]: true
        }
      };
    case EDIT_STOP:
      return {
        ...state,
        editing: {
          ...state.editing,
          [action.id]: false
        }
      };
    case SAVE:
      return state; // 'saving' flag handled by redux-form
    case SAVE_SUCCESS:
      const data = [...state.data];
      data[action.result.id - 1] = action.result;
      return {
        ...state,
        data: data,
        editing: {
          ...state.editing,
          [action.id]: false
        },
        saveError: {
          ...state.saveError,
          [action.id]: null
        }
      };
    case SAVE_FAIL:
      return typeof action.error === 'string' ? {
        ...state,
        saveError: {
          ...state.saveError,
          [action.id]: action.error
        }
      } : state;
    case SAVE_WIDGET:
      return {
        ...state,
        widgetList: [
          ...state.widgetList,
          action.widget
        ]
      };
    case SAVE_WIDGET_DB:
      return state; // 'saving' flag handled by redux-form
    case SAVE_WIDGET_DB_SUCCESS:
      const widget = action.result.widget;
      const widgets = action.result.widgets;

      return {
        ...widget,
        widgetList: widgets,
        loaded: false,
        editing: {},
        saveError: {}
      };
    case SAVE_WIDGET_DB_FAIL:
      return typeof action.error === 'string' ? {
        ...state,
        saveError: {
          ...state.saveError,
          [action.id]: action.error
        }
      } : state;
    case REMOVE_ALL:
      return {
        ...state,
        loading: true
      };
    case REMOVE_ALL_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        widgetList: [],
        error: null
      };
    case REMOVE_ALL_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.weather && globalState.weather.loaded;
}

// export function load() {
//   return {
//     types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
//     promise: (client) => client.get('/widget/load/param1/param2') // params not used, just shown as demonstration
//   };
// }

export function save(widget) {
  return {
    types: [SAVE, SAVE_SUCCESS, SAVE_FAIL],
    id: widget.id,
    promise: (client) => client.post('/widget/update', {
      data: widget
    })
  };
}

export function editStart(id) {
  return { type: EDIT_START, id };
}

export function editStop(id) {
  return { type: EDIT_STOP, id };
}

export function saveWidget(widget) {
  return { type: SAVE_WIDGET, widget };
}

export function saveWidgetDB(widget) {
  return {
    types: [SAVE_WIDGET_DB, SAVE_WIDGET_DB_SUCCESS, SAVE_WIDGET_DB_FAIL],
    id: widget.id,
    promise: (client) => client.post('/weather/add', {
      data: widget
    })
  };
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/weather/load') // params not used, just shown as demonstration
  };
}

export function removeAll() {
  return {
    types: [REMOVE_ALL, REMOVE_ALL_SUCCESS, REMOVE_ALL_FAIL],
    promise: (client) => client.get('/weather/remove')
  };
}
