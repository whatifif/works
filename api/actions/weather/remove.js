import WidgetModel from './model/WidgetModel';

function remove(req) {
  return new Promise((resolve, reject) => {
    // make async call to database
    WidgetModel.find({}).remove(function(err, items) {
      if (err) reject(err);
      resolve({msg: 'removed'});
    });
  });
}

export default remove;