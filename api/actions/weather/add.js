import load from './load';
import WidgetModel from './model/WidgetModel';

export default function add(req, params) {

  const widget = req.body;

  return new Promise((resolve, reject) => {
    // write to database
    WidgetModel.create(widget, function(err, item) {
      if(err) {
        reject(err);
      };
      WidgetModel.find({}, function(err, items) {
        if(err) {
          reject(err);
        }
        resolve({widget: item, widgets: items});
      });

    });
  });
}
//----------------------------------------
// import load from './load';
// import WidgetModel from './model/WidgetModel';

// export default function add(req, params) {

//   const widget = req.body;

//   return new Promise((resolve, reject) => {
//     // write to database
//     WidgetModel.create(widget, function(err, item) {
//       if(err) {
//         reject(err);
//       };
//       resolve(item);
//     });
//   });
// }

