import WidgetModel from './model/WidgetModel';

function load(req) {
  return new Promise((resolve, reject) => {
    // make async call to database
    WidgetModel.find({}, function(err, items) {
      if (err) reject(err);
      resolve({widgets: items});
    });
  });
}

export default load;
