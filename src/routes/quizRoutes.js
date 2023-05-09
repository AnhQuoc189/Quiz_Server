const express = require('express');

const {
    getQuizes,
    createQuiz,
    getQuiz,
    updateQuiz,
    getPublicQuizes,
    getQuizesBySearch,
    getTeacherQuizes,
    deleteQuiz,
    likeQuiz,
    commentQuiz
} = require('../controllers/quiz.controller');

const {
    verifyAdmin,
    verifyAccessToken
} = require('../middleware/auth.middleware');

const {
    verifyPrivateQuiz,
    verifyQuizOwner
} = require('../middleware/quiz.middleware');

const router = express.Router();

router.use(verifyAccessToken);
router.get('/allquizzes', getQuizes);
router.get('/public', getPublicQuizes);
router.get('/search', getQuizesBySearch);
router.get('/teacher/:teacherId', getTeacherQuizes);

router.route('/').get(verifyAdmin, getQuizes).post(createQuiz);
router
    .route('/:id')
    .get(verifyPrivateQuiz, getQuiz)
    .put(verifyQuizOwner, updateQuiz)
    .delete(verifyQuizOwner, deleteQuiz);
router.route('/:id').get(getQuiz).put(updateQuiz);

router.patch('/:id/likeQuiz', likeQuiz);
router.post('/:id/commentQuiz', commentQuiz);

module.exports = router;
