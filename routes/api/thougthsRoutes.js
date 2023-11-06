const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThoughts,
  updateThought,
  removeThought,
  addReactions,
  removeReaction

} = require('../../controllers/thoughtsController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThoughts);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/responses').post(addReactions).delete(removeReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/responses/:responseId').delete(removeReaction);

module.exports = router;