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

exports.getPost = async (req, res) => {
    try {
        const post = await Posts.findOne({
            where: {
                id: req.params.id,
            },
            include: [],
        });
        res.status(200).json(post);
    } catch (error) {
        console.log(error);
        res.status(500).send('Unable to fetch post');
    }
};
