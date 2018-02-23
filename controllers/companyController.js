let Company = require('../models/companyModel');
let _ = require('lodash');

module.exports = {
  //to store the company to DB
  create: (req, res) => {
    let baseObj = _.pick(req.body, [
      "name",
      "address",
      "city"
    ]);
    if (_.isEmpty(baseObj.name)) {
      return res.status(400).send({
        err: 'name is required field'
      });
    }
    let company = new Company(baseObj);
    company.save({})
      .then((companySaved) => {
        return res.status(200).json(companySaved);
      })
      .catch((err) => {
        return res.status(500).send(err);
      });
  },
  //update the company info to DB
  update: (req, res) => {

    if (_.isEmpty(req.params.id)) {
      return res.status(400).send({
        err: 'invalid Id field'
      });
    }
    let baseObj = _.pick(req.body, [
      "name",
      "address",
      "city"
    ]);
    Company.findByIdAndUpdate(req.params.id, baseObj, {
        new: true
      })
      .then((company) => {
        return res.status(200).json(company);
        console.log(company);
      })
      .catch((err) => {
        return res.status(500).json(err);
      })
  },
  //Featching all the companies from db
  find: (req, res) => {
    Company.find()
      .then((company) => {
        return res.json(company);
        console.log(company);
      })
      .catch((err) => {
        return res.status(404).json(err);
      });
  },
  //Featching all the companies from db
  findOne: (req, res) => {
    Company.findById({
        _id: req.params.id
      })
      .then((company) => {
        return res.status(200).json(company);
        console.log(company);
      })
      .catch((err) => {
        return res.status(404).json(err);
        console.log(err);
      });
  },
  //delete perticular  company from db
  delete: (req, res) => {
    if (_.isEmpty(req.params.id)) {
      return res.status(400).send({
        err: 'invalid Id field'
      });
    }
    Company.findByIdAndRemove({
        _id: req.params.id
      })
      .then((company) => {
        if (!company) {
          return res.status(404).json({
            msg: 'not able find company'
          });
        }
        return res.status(200).json({
          msg: 'Company ' + req.body.name + ' deleted successfully with'
        });
      })
      .catch((err) => {
        return res.status(404).json(err);
      })
  }
};
