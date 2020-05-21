const router = require('express').Router();
let Task = require('../models/task.model');

router.route('/').get((req, res) => {
    Task.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async (req, res) => {

    const newTask = new Task({
        name: req.body.name,
        desc: req.body.desc,
        due: req.body.due,
        status: 'Incomplete'
    });

    try {
        const task = await newTask.save();
        res.send({
            success: true,
            message: `Yes, task successfully added.`,
        });
    } catch (err) {
        res.send({
            success: false,
            message: `Server error: ${err}`,
        });
    }
});

router.route('/del/:id').delete((req, res) => {
    Task.findByIdAndDelete(req.params.id)
        .then(() => res.json('Task deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;