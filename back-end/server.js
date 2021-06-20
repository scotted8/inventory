const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/inventory', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

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
app.get('/api/items', async (req, res) => {
  try {
    let items = await Item.find();
    res.send({items: items});
  } catch(error) {
    res.sendStatus(500);
  }
});

// get a single item from the database
app.get('/api/items/:id', async (req, res) => {
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
app.put('/api/items/:id', async (req, res) => {
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
app.post('/api/items', async (req, res) => {
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
app.delete('/api/items/:id', async (req, res) => {
  try {
    await Item.deleteOne({ _id: req.params.id });
    res.sendStatus(200);
  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
