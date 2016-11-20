import mongoose from 'mongoose';
// const ObjectId = mongoose.Schema.Types.ObjectId;
// const Mixed = mongoose.Schema.Types.Mixed;

const WidgetSchema = new mongoose.Schema({
    id: { type: String},
    title: { type: String, required: true },
    showWind: { type: Boolean },
    units: { type: String },
    widgetSrc: { type: String},
    widgetCode: { type: String},
}, { strict: false})

// WidgetSchema.index({ id: 1 }, { unique: true });
const WidgetModel = mongoose.model('weather', WidgetSchema);

export default WidgetModel;
