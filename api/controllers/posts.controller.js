const Posts = require('../models/post.model');

exports.getAllPosts = async (req, res) => {
    try {
        const allPosts = await Posts.findAll({
            include: [],
        });
        res.status(200).json(allPosts);
    } catch (error) {
        console.log(error);
        res.status(500).send('Unable to fetch posts');
    }
};
