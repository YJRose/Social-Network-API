const { Thought, Reaction, User } = require('../models');

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const thought = await thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err)
    }
  },
  // create a new thought
  async createThoughts(req, res) {
    try {
      const thought = await thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughtss: thought._id } },
        { new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'Thought created, but found no user with that ID' });
      }

      res.json('Created the thought 🎉');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
    // update a thought
    async updateThought(req, res) {
        try {
            const thought = await thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );
        
            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }
        
            res.json(thought);
        }catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // delete a thought
    async removeThought(req, res) {
        try {
            const thought = await thought.findOneAndRemove({ _id: req.params.thoughtId });
        
            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }
            
            const user = await user.findOneAndUpdate(
                { thought: req.params.thoughtId },
                { $pull: { thoughts: req.params.thought._id } },
                { new: true }
            );
            if (!user) {
                return res
                    .status(404)
                    .json({ message: 'Thought created, but no user with that ID' });
            }
            res.json('Thought deleted 🗑️');
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // add a reaction
    async addReactions(req, res) {
        try {
            const reaction = await reaction.create(req.body);
            const thought = await thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: reaction._id } },
                { new: true }
            );
        
            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }
        
            res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    //Remove a reaction
    async removeReaction(req, res) {
        try {
            const reaction = await reaction.findOneAndRemove({ _id: req.params.reactionId });
        
            if (!reaction) {
                return res.status(404).json({ message: 'No reaction with that ID' });
            }
        
            const thought = await thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: req.params.reactionId } },
                { new: true }
            );
        
            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }
        
            res.json('Reaction deleted 🗑️');
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
};
