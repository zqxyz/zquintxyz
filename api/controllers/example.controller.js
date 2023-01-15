const Example = require('../models/example.model');

exports.exampleFn = (req, res) => {
    res.json({ hello: 'there' });
};
