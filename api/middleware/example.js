module.exports = (req, res, next) => {
    if (req.method === 'GET') {
        next();
        return;
    }
    res.status(401).send('Unauthorized');
};
