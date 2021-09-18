const Router = require('express').Router;
const router = new Router();
const calendarRouter = require('./calendarRouter');
const userController = require('../controllers/userController');
const {body} = require('express-validator');
const calendarController = require('../controllers/calendarController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    userController.registration);

router.post('/login', userController.login);

router.post('/logout', userController.logout);

router.get('/activate/:link', userController.activate);

router.get('/refresh', userController.refresh);

router.use('/calendar', calendarRouter);

router.post('/create', authMiddleware, calendarController.create);

router.get('/:id', authMiddleware, calendarController.getOne);

module.exports = router;
