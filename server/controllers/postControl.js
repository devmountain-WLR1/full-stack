module.exports = {
    getPosts: async (req, res) => {
        const db = req.app.get('db');
        const posts = await db.posts.get_posts();
        res.status(200).send(posts);
    },
    addPost: async (req, res) => {
        const db = req.app.get('db');
        const {title, body, imageUrl} = req.body;
        const {userId} = req.session.user;
        if(!req.session.user){
            return res.status(401).send("Please login")
        }
        const posts = await db.posts.add_post([title, body, imageUrl, userId]);
        res.status(200).send(posts)
    }
}