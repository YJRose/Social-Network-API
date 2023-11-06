const connection = require('..config/connection');
const { User, Thought } = require('../models');
const { getRandName, getRandThoughts, getRandReaction } = require('./data');

connection.once('open', async () => {
    // delete all collections from the database
    let thoughtCheck = await Thought.deleteMany({});