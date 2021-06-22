const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const users = require("./users.js");
const User = users.model;
const validUser = users.valid;

// create schema for entering items in inventory
const itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  owner: String,
  condition: String,
  comments: String,
})

// create a model for the items
const Item = mongoose.model('Item', itemSchema);

// get all items in the database
router.get("/", validUser, async (req, res) => {
  try {
    let items = await Item.find();
    res.send({items: items});
  } catch(error) {
    res.sendStatus(500);
  }
});

// get a single item from the database
router.get('/:id', validUser, async (req, res) => {
  try {
    let item = await Item.findOne({
      _id: req.params.id,
    });
    res.send(item);
  } catch(error) {
    res.sendStatus(500);
  }
});

// update an item in the database
router.put('/:id', validUser, async (req, res) => {
  try {
    let item = await Item.findOne({
      _id: req.params.id,
    });
    item.name = req.body.name;
    item.quantity = req.body.quantity;
    item.owner = req.body.owner;
    item.condition = req.body.condition;
    item.comments = req.body.comments;
    await item.save();
    res.send(item);
  } catch (error) {
    res.sendStatus(500);
  }
});

// create a new item in the database
router.post('/', validUser, async (req, res) => {
  const item = new Item({
    name: req.body.name,
    quantity: req.body.quantity,
    owner: req.body.owner,
    condition: req.body.condition,
    comments: req.body.comments,
  });

  // after creating the new item, try saving it in the database
  try {
    await item.save();
    res.send({item:item});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }

});

// delete an item from the database
router.delete('/:id', validUser, async (req, res) => {
  try {
    await Item.deleteOne({ _id: req.params.id });
    res.sendStatus(200);
  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = {
  model: Item,
  routes: router,
}
