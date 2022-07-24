const {User} = require('../Database/users');
const jwt = require('jsonwebtoken');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
}

const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        // console.log(newUser);
        const checkUser = await User.findOne({email: newUser.email});
        if (checkUser) {
           return res.status(400).send({message: 'User already exists'});
        }
        let user = new User(newUser);
        await user.save();
        user = user.toJSON();
        delete user.password;
        res.status(200).send(user);

    } catch (error) {
       return res.status(500).send({message: error.message});
    }
}


const userLogin = async (req, res) => {
    try {
        const {email, password} = req.body;
        let user = await User.findOne({email}).populate('password');
        // console.log(user);
        if (!user) {
            return res.status(400).send({message: 'User does not exist'});
        }
        else{
            if(user.password === password){
                // user.delete('password');
                // user = user.toJSON();
                // delete user.password;
                // console.log(user);
                const token = jwt.sign({email: user.email,id: user._id,name: user.name}, 'SFG()ASG#@1963XYZ');

                return res.status(200).send({token});
            }
            else{
                return res.status(400).send({message: 'Password is incorrect'});
            }
        }
        
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
}

const checkUserByToken = async (req, res) => {
    try {
        let {token} = req.headers;
        let decoded = jwt.verify(token, 'SFG()ASG#@1963XYZ');
        if(decoded){
            return res.status(200).send({token});
        }
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
}


module.exports = {
    getAllUsers,
    createUser,
    userLogin,
    checkUserByToken
}
