const router = require('express').Router();

const { 
    addComment, 
    removeComment,
    addreply,
    removeReply
} = require('../../controllers/comment-controllers');

// /api/comments/pizzaId
router.route('/:pizzaId').post(addComment);

// /api/comments/pizzaId/commentIc
router
    .route('/:pizzaId/:commentId')
    .put(addreply)
    .delete(removeComment);

router  
    .route('/:pizzaId/:commentId/:replyId')
    .delete(removeReply)

module.exports = router;