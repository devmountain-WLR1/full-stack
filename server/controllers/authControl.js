const bcrypt = require('bcrypt');

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        const { email, password, username } = req.body;
        const foundUser = await db.user.check_user(email);
        if(foundUser[0]){
            return res.status(400).send("User already exists. Please login");
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const [newUser] = await db.user.add_user(email, username, hash);
        // delete newUser.password
        // req.session.user = newUser
        console.log(newUser)
        req.session.user = {
            userId: newUser.user_id,
            email: newUser.email,
            username: newUser.username
        }
        res.status(200).send(req.session.user)
    },
    login: async (req, res) => {
        const db = req.app.get('db');
        const {email, password} = req.body;
        const [foundUser] = await db.user.check_user(email);
        if(!foundUser){
            return res.status(401).send("Incorrect login information");
        }
        const authenticated = bcrypt.compareSync(password, foundUser.password);
        if(authenticated){
            req.session.user = {
                userId: foundUser.user_id,
                email: foundUser.email,
                username: foundUser.username
            }
            res.status(200).send(req.session.user)
        } else {
            res.status(401).send("Incorrect login information")
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    getUser: (req, res) => {
        if(req.session.user){
            res.status(200).send(req.session.user)
        } else {
            res.status(404).send("Please Login")
        }
    }
};