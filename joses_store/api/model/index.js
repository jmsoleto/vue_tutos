const mongoose = require('moongose');
const Schema = mongoose.Schema,
      model  = mongose.model.bind(mongoose),
      ObjectId = mongoose.Schema.Types.ObjectId;


const productSchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
  manufacturer: {type:ObjectId, ref: 'Manufaturer'}
});

const manufacturerSchema = Schema({
  id: ObjectId,
  name:String
})

const Product = model('Product', productSchema);
const Manufacturer = model('Manufacturer', manufacturerSchema);