import WidgetModel from './WidgetModel';

const WidgetSeed = () => {
  WidgetModel.find({}).remove(function(err, item) {
    if(err) throw err;
    //removed
  })
}

export default WidgetSeed;
