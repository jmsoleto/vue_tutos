const Model = require('../model');
const {Product, Manufacturer} = Model;

const manufacturerController = {
  all (req, res) {
    Manufacturer.find({}).exec((err, manufacturers) => res.json(manufacturers))
  },

  add (req, res) {
    const reqBody = req.body;
    const newManufacturer = new Manufacturer(reqBody);
    newManufacturer.save(function(err,saved){
     Manufacturer.find({}).exec((err, manufacturers) => res.json(manufacturers))
    });
  }

}

module.exports =  manufacturerController;